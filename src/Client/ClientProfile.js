import React from "react";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import ClientConfigForm from "./ClientConfigForm";
import ClientProfileCatalogs from "./ClientProfileCatalogs";
import {useCommonStyles} from "../utils/commonStyles";

function ClientProfileConfig(){
    const classes = useCommonStyles();
return (
    <>
        <Formik
        initialValues={{
            businessName: 'Kulko app',
            businessDescripcion: 'Catalogos de pedidos por Whatsapp',
            businessUrl: 'kulkoapp',
            schedule: 'de 8 a 20hs',
            logo: '',
            paymentType:'Efectivo/Transferencia',
            orderVia: 'whatsapp',
            name:'Kulko app',
            description:'Catalogos de pedidos por Whatsapp',
            address: 'Calle falsa 123',
            phoneNumber: '+56915645766',
            coin: '$',
            category: 'Desarrollo web',
            country: 'Chile',
            minDelivery: '100',
            deliveryCharge: '200'

        }}>
            {
                props => {
                    const {
                        values,
                        handleChange,
                        errors
                    } = props;
                    return (
                        <Form>
                            <Paper className={classes.paper}>
                                <ClientConfigForm
                                    values={values}
                                    handleChange={handleChange}
                                    errors={errors}
                                />
                            </Paper>
                        </Form>
                    )
                }
            }
        </Formik>
    </>
)
}

const ClientProfile = () => {
    const classes = useCommonStyles();
    return (
        <div className={classes.layout}>
            <ClientProfileCatalogs/>
            <ClientProfileConfig/>
        </div>
    )
}
export default ClientProfile;