import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    }
}));

export default function EmptyCartMessage() {

    const classes = useStyles();
    return (
        <Grid container
              spacing={5}
              alignItems="center"
              justify="center"
        >
            <Grid item xs={8} style={{margin:"5%"}}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                    <Typography variant="h6" gutterBottom>
                        Parece que tu carrito está vacío
                    </Typography>
                    <Typography>Para comenzar, creá una categoría para poder agregar productos.</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}