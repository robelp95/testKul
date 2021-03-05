import React from "react";
import {Form, Formik} from "formik";
import Checkout from "./Checkout";
import {generateWhatsappMsg} from "../utils/utils";


export const CheckoutForm = ({initialClient})=>{
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Datos del cliente', 'Resumen de orden'];
    return (
        <Formik
            initialValues={initialClient}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                console.log(JSON.stringify(values, null, 2));
                let msg = generateWhatsappMsg(values);
                //TODO POST pedido
                // Nueva ventana para whatsapp
                // deshabilitar boton de submitting
                window.open(
                msg,
                "_blank");
            }}
        >
            {props => {
                const {
                    values,
                    handleSubmit,
                    isSubmitting
                } = props;
                return (
                    <Form
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <Checkout steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} {...props}/>
                    </Form>
                )
            }}
        </Formik>
)

}


//%20
//%0A
//*Pideasy*%0A*Nuevo%20pedido%20nº%2033223514*%0A*Tipo%20de%20pago*%20Efectivo/transferencia%0A*Cliente*%20Apellido,%20Nombre%0A*Contacto*%20+5645345678%0A*Tipo%20de%20Envío*%20Pickup/delivery%0A*Dirección*%20Calle%20falsa,%20123%0A*Detalle*%20comentario%20extra%20sobre%20el%20pedido%20bla%20bla%20bla,%20bla%20bla%0Ax3%20-%20Producto%201%20-%20$23%0Ax1%20-%20Producto%202%20-%20$5%0Ax2%20-%20Producto%203%20-%20$2%0A*Total%20a%20pagar*%20$30