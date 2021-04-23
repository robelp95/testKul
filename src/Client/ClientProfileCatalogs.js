import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withRouter} from "react-router-dom";
import {useCommonStyles} from "../utils/commonStyles";

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

    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl);
    }

    return (
        <Paper className={classes.paper}>
            <Grid item xs={12} className={commonClasses.title}>
                <Typography component="h1" variant="h4" align="center">
                    Mis catálogos
                </Typography>
            </Grid>
            <Grid container justify="center" spacing={3}>
                        <Button color="primary" onClick={() => handleMenuClick('/manage-catalog')}>Administrar Catálogo</Button>
            </Grid>
        </Paper>
    )
}
export default withRouter(ClientProfileCatalogs);