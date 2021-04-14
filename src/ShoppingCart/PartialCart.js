import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CartItemList from "./CartItemList";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
}));

export default function PartialCart(props) {
    const {products, onDeleteFromCart} = props;
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Carrito
                </Typography>
                <CartItemList
                    products={products}
                    total={null}
                    onDeleteFromCart={onDeleteFromCart}
                />
            </Paper>
        </>
    )
}