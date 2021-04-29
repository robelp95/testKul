import React, {useContext} from "react";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import ClientConfigForm from "./ClientConfigForm";
import ClientProfileCatalogs from "./ClientProfileCatalogs";
import {useCommonStyles} from "../utils/commonStyles";
import {UserContext} from "../UserContext";

function ClientProfileConfig(){
    const classes = useCommonStyles();
    const { state } = useContext(UserContext);
return (
    <>
        <Formik
        initialValues={{
            brandName: state.user.brandName,
            description: state.user.description,
            businessUrl: 'kulkoapp',
            schedule: state.user.opening,
            logo: '',
            paymentInstructions: state.user.paymentInstructions,
            orderVia: 'whatsapp',
            name: state.user.name,
            address: state.user.Address,
            phoneNumber: state.user.phoneNumber,
            coin: state.user.coin,
            category: state.user.category,
            country: state.user.country,
            minDelivery: state.user.minDelivery,
            deliveryCharge: state.user.deliveryCharge

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