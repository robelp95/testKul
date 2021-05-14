import React, {useContext, useEffect, useState} from "react";
import {useCommonStyles} from "../utils/commonStyles";
import ColapsibleTable from "../utils/ColapsibleTable";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {USERS_ENDPOINT} from "../Api/Contants";
import {getHeaders, useNull} from "../utils/utils";
import {UserContext} from "../Context/UserContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Hidden} from "@material-ui/core";

export default function ClientOrders(props) {

    const classes = useCommonStyles();
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const {state} = useContext(UserContext);

    useEffect(() => {

        try {
            async function fetchOrders() {
                const headers = {headers: getHeaders(state.user.token)};
                const response  = await axios.get(USERS_ENDPOINT + '/' + parseInt(state.user.id) + '/orders', headers).catch(useNull)
                setOrders(response.data);
                setLoading(false);
                return response;
            }
            fetchOrders();
        }catch (e) {
            console.log(e);
        }
        
    }, [])

    return (
        <>
            {loading ?
                <div style={{textAlign: "center"}} className={classes.layout}><CircularProgress/></div>
                :
                (<div className={classes.layout}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography component="h1" variant="h4" align="center">
                            Mis pedidos
                        </Typography>
                    </Grid>

                    <Hidden smUp>
                        <Grid item xs={12} className={classes.title}>
                            <Typography component="p" variant="p" align="center">
                                Deslice para ver todos los campos
                            </Typography>
                        </Grid>
                    </Hidden>

                    <ColapsibleTable orders={orders}/>
                </div>)}

        </>

    )
}