import React from "react";
import {Form, Formik} from "formik";
import Checkout from "./Checkout";
import * as Yup from 'yup';
import {generateWhatsappMsg, useNull} from "../utils/utils";
import axios from "axios";
import {NEW_ORDER, USERS_ENDPOINT} from "../Api/Contants";

const formSchema = Yup.object().shape({
        firstName: Yup.string().required(undefined),
        lastName: Yup.string().required(undefined),
        phoneNumber: Yup.string().matches(/^[0-9]{8,10}$/).required(undefined),
        deliveryType: Yup.string().matches(/(pickup|delivery)/, { excludeEmptyString: true }).required(),
        address1: Yup.string(),
        address2: Yup.string(),
        comment: Yup.string(),
});

export const CheckoutForm = ({initialClient, order, setSubmitting, userData})=>{
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Datos del cliente', 'Resumen de orden'];

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const createOrder = async (order) => {

        try {
            console.log(order);
            const data = NEW_ORDER;
            let name = order.values.firstName + " " + order.values.lastName
            data.client = name;
            data.contact = order.values.phoneNumber;
            data.orderNumber = order.order.orderNumber;
            data.total = order.order.total;
            data.type = order.values.deliveryType;
            data.products = order.order.orderProducts.map( p => ({
                price:p.price,
                quantity: p.quantity,
                name:p.name}));
            const newOrder = await axios
                .post(USERS_ENDPOINT + '/' + parseInt(order.order.user.id) + '/orders', data)
                .catch(useNull);
            console.log(newOrder);
        }catch (e) {
            console.log(e);
        }

    }

    const handleNext = () => [
        setActiveStep(Math.min(activeStep + 1, steps.length))
    ];
    const onSubmit = (values) => {
        if (!isLastStep()) {
            setSubmitting(false);
            handleNext();
            return;
        }

        setTimeout(() => {
            setSubmitting(true);
            if (order.orderProducts.length > 0) {
                handleNext();
                createOrder({values, order});
                let msg = generateWhatsappMsg({values, order});
                window.open(
                    msg,
                    "_blank");
            }
            setSubmitting(false);
        }, 1000);
    };

    return (
        <Formik
            initialValues={initialClient}
            validationSchema={formSchema}
            onSubmit={onSubmit}
        >
            {
                props => {

                    const {
                        errors,
                        isSubmitting,
                    } = props;
                    return (
                        <Form
                            method="POST"
                        >
                            <Checkout
                                steps={steps}
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                                errors={errors}
                                order={order}
                                isSubmitting={isSubmitting}
                                userData={userData}
                                {...props}
                            />
                        </Form>
                    )
            }}
        </Formik>
    )
}