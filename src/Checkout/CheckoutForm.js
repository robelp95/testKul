import React from "react";
import {Form, Formik} from "formik";
import Checkout from "./Checkout";

export const CheckoutForm = ({initialClient})=>{
    return (<Formik
    initialValues={initialClient}
    onSubmit={ (client:Client) => {
        console.log("submit");
    }}
    // validationSchema={validationSchema}
>
    {(client, handleChange) => (
        <Form method="POST" onSubmit={(e) =>{
            e.preventDefault();
            console.log("Submit");
        }}
        >
            <Checkout/>
        </Form>
    )}
</Formik>)
}