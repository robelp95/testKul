import React from "react";
import {Form, Formik} from "formik";
import Checkout from "./Checkout";


export const CheckoutForm = ({initialClient})=>{
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Datos del cliente', 'Resumen de orden'];
    console.log("prev",steps, activeStep, steps.length);
    return (
        <Formik
            initialValues={initialClient}
            onSubmit={ (values) => {
                console.log("submit");

                // console.log(steps, activeStep, steps.length);
                // if (activeStep === steps.length){
                //     console.log("open");
                //     window.open(
                //         "https://api.whatsapp.com/send?phone=5491161347712&text=*Pideasy*%0A%0A*Nuevo%20pedido%20nº%2033223514*%0A%0A*Tipo%20de%20pago*%20Efectivo/transferencia%0A%0A*Cliente*%20Apellido,%20Nombre%0A%0A*Contacto*%20+5645345678%0A%0A*Tipo%20de%20Envío*%20Pickup/delivery%0A%0A*Dirección*%20Calle%20falsa,%20123%0A%0A*Detalle*%20comentario%20extra%20sobre%20el%20pedido%20bla%20bla%20bla,%20bla%20bla%0A%0Ax3%20-%20Producto%201%20-%20$23%0A%0Ax1%20-%20Producto%202%20-%20$5%0A%0Ax2%20-%20Producto%203%20-%20$2%0A%0A*Total%20a%20pagar*%20$30",
                //         "_blank");
                // }
            }}
        >
    {(client) => (
        <Form method="POST">
            <Checkout steps={steps} activeStep={activeStep} setActiveStep={setActiveStep}/>
        </Form>
    )}
        </Formik>
)

}


//%20
//%0A
//*Pideasy*%0A*Nuevo%20pedido%20nº%2033223514*%0A*Tipo%20de%20pago*%20Efectivo/transferencia%0A*Cliente*%20Apellido,%20Nombre%0A*Contacto*%20+5645345678%0A*Tipo%20de%20Envío*%20Pickup/delivery%0A*Dirección*%20Calle%20falsa,%20123%0A*Detalle*%20comentario%20extra%20sobre%20el%20pedido%20bla%20bla%20bla,%20bla%20bla%0Ax3%20-%20Producto%201%20-%20$23%0Ax1%20-%20Producto%202%20-%20$5%0Ax2%20-%20Producto%203%20-%20$2%0A*Total%20a%20pagar*%20$30