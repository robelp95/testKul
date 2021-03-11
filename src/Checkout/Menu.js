import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import VerticalTabs from "../ShoppingCart/VerticalTabs";

const useStyles = makeStyles((theme) => ({
    layout:{
        //Contenido centrado
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        margin: 10
        //Contenido centrado
    }
}));

export default function Menu() {

    const classes = useStyles();

    return (
        <>
            <MainFeaturedPost post={{
                title: 'Titulo del catalogo de productos',
                description:
                    "Descripción del catálogo de productos",
                image: 'https://source.unsplash.com/random',
                imgText: 'main image description'
            }} />
            <div className={classes.layout}>
                <VerticalTabs/>
                <CheckoutForm
                    initialClient={{
                    firstName : '',
                    lastName: '',
                    phoneNumber: '',
                    deliveryType: '',
                    address1: '',
                    address2: '',
                    comment: ''
                    }}
                />
            </div>
        </>
    );
}