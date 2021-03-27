import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import ClientConfigForm from "./ClientConfigForm";
import ClientProfileCatalogs from "./ClientProfileCatalogs";

const useStyles = makeStyles((theme) => ({
    layout:{
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        margin: 10
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));

function ClientProfileConfig(){
    const classes = useStyles();
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
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <ClientProfileCatalogs/>
            <ClientProfileConfig/>
        </div>
    )
}
export default ClientProfile;