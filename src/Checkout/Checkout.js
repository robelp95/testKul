import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Kulko.app
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        // width: 'auto',
        // marginLeft: theme.spacing(2),
        // marginRight: theme.spacing(2),
        // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        //     width: 600,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
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
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

function getStepContent(step, props) {
    const {values, handleChange, errors, initialErrors, order} = props;
    switch (step) {
        case 0:
            return <AddressForm values={values} handleChange={handleChange} errors={errors} initialErrors={initialErrors} />;
        case 1:
            return <Review client={values} order={order} />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout(props) {
    const classes = useStyles();
    const {steps, activeStep, setActiveStep, errors, order, dirty} = props;
    const [formIsValid, setFormIsValid] = useState(dirty);
    useEffect(() => {
        if (dirty) setFormIsValid(Object.keys(errors).length === 0)
    }, [errors])

    const handleBack = () => {
        setActiveStep(Math.max(activeStep - 1, 0));
    };
    return (
        <React.Fragment>
            <CssBaseline />

            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Mi pedido
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Gracias por realizar tu pedido.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Tu número de orden es #{order.orderNumber}. Te enviamos un mail de confirmación,
                                    haremos el seguimiento por Whatsapp.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>


                                {getStepContent(activeStep, props)}


                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Volver
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        type="submit"
                                        disabled={!formIsValid}
                                    >
                                        {
                                            activeStep === steps.length - 1 ? 'Generar pedido' : 'Siguiente'
                                        }
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    );
}