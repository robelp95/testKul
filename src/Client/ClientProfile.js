import React, {useContext, useState} from "react";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import ClientConfigForm from "./ClientConfigForm";
import ClientProfileCatalogs from "./ClientProfileCatalogs";
import {useCommonStyles} from "../utils/commonStyles";
import {UserContext} from "../Context/UserContext";
import axios from "axios";
import {API_HEADERS, UPDATE_USER_MENU_ENDPOINT, USER_DATA} from "../utils/Contants";
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
    phoneNumber: Yup.string().matches(/^[0-9]{8}$/).required(undefined),
});

function ClientProfileConfig(props){
    const classes = useCommonStyles();
    const { state } = useContext(UserContext);
    const {updateUserData, setState} = props;
    const [loading, setLoading] = useState(false);
    const postData = async (values) => {

        /**
         * @type{
         * address: string,
         * brandName: string,
         * base64Image: string|null,
         * categoryId: number,
         * description: string,
         * deliveryCharge: number,
         * email: string,
         * minDelivery: number
         * name: string,
         * orderViaId: number,
         * open: boolean,
         * opening: string,
         * paymentInstructions: string,
         * phoneNumber: number,
         * username: string
         * }}
         */
        let user = USER_DATA;
        user.address = values.address;
        user.brandName = values.brandName;
        user.base64Image = null;
        user.categoryId = values.category.id;
        user.description = values.description;
        user.deliveryCharge = parseInt(values.deliveryCharge);
        user.email = values.email;
        user.minDelivery = parseInt(values.minDelivery);
        user.name = values.name;
        user.open = values.open;
        user.opening = values.opening;
        user.orderViaId = state.user.orderVia.id;
        user.paymentInstructions = values.paymentInstructions;
        user.phoneNumber = values.phoneNumber;
        user.username = state.user.username;

        try {
            const response = await axios.post(UPDATE_USER_MENU_ENDPOINT + state.user.id,
                user, API_HEADERS);
            setLoading(false)
            return response.data;
        }catch (e) {}
        setLoading(false);
    }

    const onSubmit= async (values) => {
        setLoading(true);
        const data = await postData(values);
        if (data){
            updateUserData(setState, state, state.user, data);
        }
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
            coin: state.user.coin,
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
                            {loading && <CircularProgress />}
                            <Form>
                                <Paper className={classes.paper}>
                                    <ClientConfigForm
                                        values={values}
                                        handleChange={handleChange}
                                        errors={errors}
                                        loading={loading}
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
    const {updateUserData, setState, fetchPaykuPlans} = props;
    return (
        <div className={classes.layout}>
            <ClientSuscriptionData/>
            <ClientProfileCatalogs/>
            <ClientProfileConfig updateUserData={updateUserData} setState={setState}/>
        </div>
    )
}
export default ClientProfile;