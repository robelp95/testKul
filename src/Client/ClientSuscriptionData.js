import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React, {useContext, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withRouter} from "react-router-dom";
import {useCommonStyles} from "../utils/commonStyles";
import {UserContext} from "../Context/UserContext";
import Chip from "@material-ui/core/Chip";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

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
    const { history } = props;
    const { state } = useContext(UserContext);

    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl);
    }
    useEffect(async () => {
    }, [])

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
            {/*{state.plans.map((p) => (*/}
            {/*    <Grid item xs={3} align="center">*/}
            {/*        <Button variant="outlined" color="primary">*/}
            {/*            {p.name}*/}
            {/*        </Button>*/}
            {/*    </Grid>*/}
            {/*))}*/}
        </Paper>
    )
}
export default withRouter(ClientProfileCatalogs);