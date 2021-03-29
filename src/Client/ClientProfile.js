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
            businessName: '',
            businessDescripcion: '',
            businessUrl: '',
            schedule: '',
            minDelivery: '',
            logo: '',
            paymentType:'',
            orderVia: 'whatsapp',
            name:'',
            description:'',
            address: '',
            phoneNumber: '',
            coin: '',
            category:'',
            country:'',

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