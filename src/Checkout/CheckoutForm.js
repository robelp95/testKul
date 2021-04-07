import React from "react";
import {Form, Formik} from "formik";
import Checkout from "./Checkout";
import * as Yup from 'yup';
import {generateWhatsappMsg} from "../utils/utils";

const formSchema = Yup.object().shape({
        firstName: Yup.string().required(undefined),
        lastName: Yup.string().required(undefined),
        phoneNumber: Yup.string().matches(/^[0-9]{8,8}$/).required(undefined),
        deliveryType: Yup.string().matches(/(pickup|delivery)/, { excludeEmptyString: true }).required(),
        address1: Yup.string(),
        address2: Yup.string(),
        comment: Yup.string(),
});

export const CheckoutForm = ({initialClient, order, setSubmitting})=>{
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Datos del cliente', 'Resumen de orden'];

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

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
                                {...props}
                            />
                        </Form>
                    )
            }}
        </Formik>
    )
}