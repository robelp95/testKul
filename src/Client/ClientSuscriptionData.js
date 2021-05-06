import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React, {useContext, useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withRouter} from "react-router-dom";
import {useCommonStyles} from "../utils/commonStyles";
import {UserContext} from "../Context/UserContext";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import {API_HEADERS, NEW_SUSCRIPTION, UPDATE_USER_DATA_ENDPOINT} from "../Api/Contants";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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
    title:{
        marginTop: "5%",
        marginBottom: "5%"
    }
}));

const ClientProfileCatalogs = (props) => {
    const classes = useStyles();
    const commonClasses = useCommonStyles();
    const { history , setNotify, setLoading} = props;
    const { state } = useContext(UserContext);

    const triggerSuscription = async (p) => {
        setLoading(true);
        let suscription = NEW_SUSCRIPTION;
        suscription.planId = p.paykuId;
        suscription.clientId = state.user.paykuId;
        try {
            const response = await axios.post(UPDATE_USER_DATA_ENDPOINT + state.user.id + '/suscriptions', suscription, API_HEADERS);
            setLoading(false);
            setNotify({isOpen:true, message: 'Suscripcion exitosa, revise email para continuar', type:'info'});
        }catch (e) {
            setLoading(false);
            setNotify({isOpen:true, message: 'No se pudo realizar la suscripcion', type:'error'});
        }

    }

    return (
        <Paper className={classes.paper}>
            <Grid item xs={12} className={commonClasses.title}>
                <Typography component="h1" variant="h4" align="center">
                    Suscripción
                </Typography>
            </Grid>
            <Grid item xs={12} className={commonClasses.title}>
                <Typography component="h6" variant="h6" color="inherit" align="center" paragraph>

                    {
                        state.user.status ?
                            <Chip
                                label="Suscripcion activa"
                                color="primary"
                                style={{backgroundColor:"#4caf50"}}
                            /> :
                            <Chip
                                label="Suscripcion inactiva"
                                color="primary"
                                style={{backgroundColor:"#f44336"}}
                            />
                    }
                </Typography>
            </Grid>
            <Grid item xs={12} className={commonClasses.title}>
                <Typography component="p" variant="h6" color="inherit" align="center" paragraph>
                     {state.user.suscription &&('Plan actual: ' +  state.user.suscription.plan.name)}
                </Typography>
            </Grid>
            {state.plans.map((p) =>
                (
                    state.user.suscription ?
                        (p.paykuId !== state.user.suscription.plan.paykuId &&
                            (<Grid item xs={3} align="center">
                                <Button variant="outlined" color="primary" onClick={() => triggerSuscription(p)}>
                                    {p.name}
                                </Button>
                            </Grid>)) :

                        (<Grid item xs={3} align="center">
                            <Button variant="outlined" color="primary" onClick={() => triggerSuscription(p)}>
                                {p.name}
                            </Button>
                        </Grid>)
                )



            )}
        </Paper>
    )
}
export default withRouter(ClientProfileCatalogs);