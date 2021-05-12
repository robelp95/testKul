import {useCommonStyles} from "../utils/commonStyles";
import React, {useContext, useState} from "react";
import {UserContext} from "../Context/UserContext";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import ClientConfigForm from "./ClientConfigForm";
import * as Yup from "yup";
import convertToBase64 from "../utils/convertToBase64";

const clientSchema = Yup.object().shape({
    address: Yup.string().required(undefined),
    brandName: Yup.string().matches(/^[a-zA-Z0-9]{3,255}$/).required(undefined),
    base64Image: Yup.string(),
    categoryId: Yup.number(),
    description: Yup.string().required(undefined),
    deliveryCharge: Yup.number().required(undefined),
    minDelivery: Yup.number().required(undefined),
    name: Yup.string().required(undefined),
    open: Yup.boolean().required(undefined),
    opening: Yup.string().required(undefined),
    paymentInstructions: Yup.string().required(undefined),
    phoneNumber: Yup.string().matches(/^[0-9]{8,10}$/).required(undefined),
});


const ClientProfileConfig = (props) => {
    const classes = useCommonStyles();
    const { state } = useContext(UserContext);
    const [file, setFile] = useState(state.user.image);
    const {updateUserData, loading, setLoading} = props;


    const onSubmit= async (values) => {
        setLoading(true);
        values.base64Image = file;
        await updateUserData(values);
        setLoading(false);
    }

    const handleFileUpload = async (file) => {
        setLoading(true);
        let base64 = await convertToBase64(file);
        setFile(base64);
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
                    categoryId: state.user.categoryId,
                    country: state.user.country,
                    minDelivery: state.user.minDelivery,
                    deliveryCharge: state.user.deliveryCharge,
                    image: state.user.image
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
                                            handleFileUpload={handleFileUpload}
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

export default ClientProfileConfig;