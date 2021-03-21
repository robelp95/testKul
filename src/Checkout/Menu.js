import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {nanoid} from 'nanoid';
import * as _ from 'lodash';
import PartialCart from "../ShoppingCart/PartialCart";
import Notification from "../ShoppingCart/Notification";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import ScrollToCheckout from "../ScrollToCheckout";
import Fab from "@material-ui/core/Fab";
import {CreditCard} from '@material-ui/icons';


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

const initialCatalog =
    {
        "id": 0,
        "username": "Jorge.Longoria",
        "email": "Raquel27@yahoo.com",
        "products": [
            {
                "id": 0,
                "name": "Pequeño Plástico Zapatos",
                "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                "price": "328.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 1,
                "name": "Guapo Plástico Raton",
                "desc": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "price": "319.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 2,
                "name": "Ergonómico Hormigon Camiseta",
                "desc": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                "price": "206.00",
                "category": "Pantalones",
                "added": false
            },
            {
                "id": 3,
                "name": "Artesanal Algodón Mesa",
                "desc": "The Football Is Good For Training And Recreational Purposes",
                "price": "507.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 4,
                "name": "Inteligente Metal Pelota",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "499.00",
                "category": "Remeras",
                "added": false
            },
            {
                "id": 5,
                "name": "Sabroso Granito Queso",
                "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                "price": "507.00",
                "category": "Pantalones",
                "added": false
            },
            {
                "id": 6,
                "name": "Guapo Metal Raton",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "662.00",
                "category": "Pantalones",
                "added": false
            },
            {
                "id": 7,
                "name": "Ergonómico Acero Bacon",
                "desc": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                "price": "279.00",
                "category": "Remeras",
                "added": false
            },
            {
                "id": 8,
                "name": "Refinado Madera Ordenador",
                "desc": "The Football Is Good For Training And Recreational Purposes",
                "price": "861.00",
                "category": "Pantalones",
                "added": false
            },
            {
                "id": 9,
                "name": "Guapa Acero Raton",
                "desc": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                "price": "764.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 10,
                "name": "Fantástico Ladrillo Pizza",
                "desc": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "price": "805.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 11,
                "name": "Increible Metal Guantes",
                "desc": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                "price": "534.00",
                "category": "Pantalones",
                "added": false
            },
            {
                "id": 12,
                "name": "Rústico Acero Pizza",
                "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                "price": "982.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 13,
                "name": "Práctico Acero Pollo",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "147.00",
                "category": "Calzado",
                "added": false
            },
            {
                "id": 14,
                "name": "Guapa Granito Sopa",
                "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "price": "869.00",
                "category": "Remeras",
                "added": false
            }
            ,
            {
                "id": 15,
                "name": "Práctico Acero Pollo",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "147.00",
                "category": "Materiales",
                "added": false
            },
            {
                "id": 16,
                "name": "Guapa Granito Sopa",
                "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "price": "869.00",
                "category": "Abrigo",
                "added": false
            },
            {
                "id": 17,
                "name": "Guapa Granito Sopa",
                "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "price": "869.00",
                "category": "Comida",
                "added": false
            },
            {
                "id": 18,
                "name": "Guapa Granito Sopa",
                "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "price": "869.00",
                "category": "Bebidas",
                "added": false
            }
        ],

    };
export default function Menu() {

    const [orderNumber, setOrderNumber] = useState(nanoid());
    const [products, setProducts] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});

    const onAddToCart = (product, qty) => {
        product.added = true;

        setProducts(products => [...products, product]);

        setNotify({isOpen:true, message: 'Item agregado al carrito', type:'success'});
    }
    const onRemoveToCart = (product, qty) => {
        product.added = false;
        let copy = _.filter(products, (e) => {
            return e.id !== product.id
        });
        setProducts(copy);
        setNotify({isOpen:true, message: 'Item eliminado del carrito', type:'info'});
    }

    const total = _.sum(products.map((product) => parseInt(product.price))) || 0;

    const [catalog, setCatalog] = useState(initialCatalog);
    const classes = useStyles();

    return (
        <>
            <MainFeaturedPost
                post={{
                title: 'Catálogo de mi emprendimiento',
                description:
                    "Descripción del catálogo de productos",
                image: 'https://source.unsplash.com/random',
                imgText: 'main image description' }}
            />

            <div className={classes.layout}>
                <ScrollableTabsButtonAuto
                    products ={catalog["products"]}
                    onAddToCart={onAddToCart}
                    onRemoveToCart={onRemoveToCart}
                    submitting={submitting}
                />
               <PartialCart products={products}/>
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
                    order={{products, orderNumber, total}}
                    setSubmitting={setSubmitting}
                />
                <Notification notify={notify} setNotify={setNotify}/>
                <ScrollToCheckout>
                    <Fab color="primary" size="medium" aria-label="scroll back to top">
                        <CreditCard />
                    </Fab>
                </ScrollToCheckout>
            </div>
        </>
    );
}