import React from "react";
import {useCommonStyles} from "../utils/commonStyles";
import ColapsibleTable from "../utils/ColapsibleTable";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function ClientOrders(props) {

    const classes = useCommonStyles();
    return (
        <>
            <div className={classes.layout}>
                <Grid item xs={12} className={classes.title}>
                    <Typography component="h1" variant="h4" align="center">
                        Mis pedidos
                    </Typography>
                </Grid>
                <ColapsibleTable/>
            </div>

        </>

    )
}