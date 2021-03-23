import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Form, Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ShoppingCartForm from "./ShoppingCartForm";

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
    },
}));


export default function ClientProfile(){
    const classes = useStyles();
return (
    <div className={classes.layout}>
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

                                <Typography component="h1" variant="h4" align="center">
                                    Ajustes del negocio
                                </Typography>
                                <ShoppingCartForm
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
    </div>
)
}