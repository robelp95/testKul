import React, {useContext, useState} from "react";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import ClientConfigForm from "./ClientConfigForm";
import ClientProfileCatalogs from "./ClientProfileCatalogs";
import {useCommonStyles} from "../utils/commonStyles";
import {UserContext} from "../Context/UserContext";
import * as Yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClientSuscriptionData from "./ClientSuscriptionData";

const clientSchema = Yup.object().shape({
    address: Yup.string().required(undefined),
    brandName: Yup.string().required(undefined),
    base64Image: Yup.string(),
    category: Yup.object().shape({id: Yup.string().required(undefined)}),
    description: Yup.string().required(undefined),
    deliveryCharge: Yup.number().required(undefined),
    minDelivery: Yup.number().required(undefined),
    name: Yup.string().required(undefined),
    open: Yup.boolean().required(undefined),
    opening: Yup.string().required(undefined),
    paymentInstructions: Yup.string().required(undefined),
    phoneNumber: Yup.string().matches(/^[0-9]{8,10}$/).required(undefined),
});

function ClientProfileConfig(props){
    const classes = useCommonStyles();
    const { state } = useContext(UserContext);
    const {updateUserData, loading, setLoading} = props;


    const onSubmit= async (values) => {
        setLoading(true);
        await updateUserData(values);
        setLoading(false);
    }

return (
    <>
        <Formik
        initialValues={{
            address: state.user.address,
            brandName: state.user.brandName,
            description: state.user.description,
            email: state.user.email,
            opening: state.user.opening,
            open: state.user.open,
            base64Image: '',
            paymentInstructions: state.user.paymentInstructions,
            orderVia: 'whatsapp',
            name: state.user.name,
            phoneNumber: state.user.phoneNumber,
            coin: state.user.userCoin,
            category: state.user.category,
            country: state.user.country,
            minDelivery: state.user.minDelivery,
            deliveryCharge: state.user.deliveryCharge
        }}
        validationSchema={clientSchema}
        onSubmit={onSubmit}
        >
            {
                props => {
                    const {
                        values,
                        handleChange,
                        errors
                    } = props;
                    return (
                        <>
                            <Form>
                                <Paper className={classes.paper}>
                                    <ClientConfigForm
                                        values={values}
                                        handleChange={handleChange}
                                        errors={errors}
                                        loading={loading}
                                        coins={state.coins}
                                        categories={state.categories}
                                        {...props}
                                    />
                                </Paper>
                            </Form>
                        </>
                    )
                }
            }
        </Formik>
    </>
)
}

const ClientProfile = (props) => {
    const classes = useCommonStyles();
    const {updateUserData, setState, setNotify} = props;
    const [loading, setLoading] = useState(false);
    return (
        <div className={classes.layout}>
            {loading && (<div style={{textAlign: "center"}} className={classes.layout}><CircularProgress/></div>)}
            <ClientSuscriptionData
                setNotify={setNotify}
                setLoading={setLoading}
                loading={loading}
            />
            <ClientProfileCatalogs />
            <ClientProfileConfig
                updateUserData={updateUserData}
                setState={setState}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    )
}
export default ClientProfile;