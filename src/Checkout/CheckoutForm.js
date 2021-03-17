import React from "react";
import {Form, Formik} from "formik";
import Checkout from "./Checkout";
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
        firstName: Yup.string().required(undefined),
        lastName: Yup.string().required(undefined),
        phoneNumber: Yup.number().required(),//.max(9, 'Telefono debe contener 9 números'),
        deliveryType: Yup.string().matches(/(pickup|delivery)/, { excludeEmptyString: true }).required(),//Yup.boolean().required('Seleccione tipo de envío'),
        address1: Yup.string(),
        address2: Yup.string(),
        comment: Yup.string(),
});

export const CheckoutForm = ({initialClient, order})=>{
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Datos del cliente', 'Resumen de orden'];
    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };
    return (
        <Formik
            initialValues={initialClient}
            validationSchema={formSchema}
            onSubmit={async (values, {setSubmitting}) => {
                if (!isLastStep()){
                    setSubmitting(false);
                    return;
                }
                // await new Promise(resolve => setTimeout(resolve, 500));
                // let msg = generateWhatsappMsg(values);
                // window.open(
                // msg,
                // "_blank");
            }}
        >
            {
                props => {

                    const {
                        errors,
                        handleSubmit,
                    } = props;

                    return (
                        <Form
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <Checkout steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} errors={errors} order={order} {...props}/>
                        </Form>
                    )
            }}
        </Formik>
    )
}