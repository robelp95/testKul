import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProductCategory from "../ShoppingCart/ProductCategory";
import {nanoid} from 'nanoid';

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
                "category": "Calzado"
            },
            {
                "id": 1,
                "name": "Guapo Plástico Raton",
                "desc": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "price": "319.00",
                "category": "Calzado"
            },
            {
                "id": 2,
                "name": "Ergonómico Hormigon Camiseta",
                "desc": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                "price": "206.00",
                "category": "Pantalones"
            },
            {
                "id": 3,
                "name": "Artesanal Algodón Mesa",
                "desc": "The Football Is Good For Training And Recreational Purposes",
                "price": "507.00",
                "category": "Calzado"
            },
            {
                "id": 4,
                "name": "Inteligente Metal Pelota",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "499.00",
                "category": "Remeras"
            },
            {
                "id": 5,
                "name": "Sabroso Granito Queso",
                "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                "price": "507.00",
                "category": "Pantalones"
            },
            {
                "id": 6,
                "name": "Guapo Metal Raton",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "662.00",
                "category": "Pantalones"
            },
            {
                "id": 7,
                "name": "Ergonómico Acero Bacon",
                "desc": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                "price": "279.00",
                "category": "Remeras"
            },
            {
                "id": 8,
                "name": "Refinado Madera Ordenador",
                "desc": "The Football Is Good For Training And Recreational Purposes",
                "price": "861.00",
                "category": "Pantalones"
            },
            {
                "id": 9,
                "name": "Guapa Acero Raton",
                "desc": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                "price": "764.00",
                "category": "Calzado"
            },
            {
                "id": 10,
                "name": "Fantástico Ladrillo Pizza",
                "desc": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "price": "805.00",
                "category": "Calzado"
            },
            {
                "id": 11,
                "name": "Increible Metal Guantes",
                "desc": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                "price": "534.00",
                "category": "Pantalones"
            },
            {
                "id": 12,
                "name": "Rústico Acero Pizza",
                "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                "price": "982.00",
                "category": "Calzado"
            },
            {
                "id": 13,
                "name": "Práctico Acero Pollo",
                "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "price": "147.00",
                "category": "Calzado"
            },
            {
                "id": 14,
                "name": "Guapa Granito Sopa",
                "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "price": "869.00",
                "category": "Remeras"
            }
        ],

    };
export default function Menu() {

    const [order, setOrder] = useState({
        orderNumber: nanoid(),
        products: [],
        total: null
    });
    const onAddToCart = (product, qty) => {
        let newProducts = order.products;
        newProducts.push({product: product, quantity: 1});
    }
    const [catalog, setCatalog] = useState(initialCatalog);
    const classes = useStyles();

    return (
        <>
            <MainFeaturedPost post={{
                title: 'Catálogo de mi emprendimiento',
                description:
                    "Descripción del catálogo de productos",
                image: 'https://source.unsplash.com/random',
                imgText: 'main image description'
            }} />

            <div className={classes.layout}>
                <ProductCategory
                    products ={catalog["products"]}
                    onAddToCart={onAddToCart}
                />
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
                    order={order}
                />
            </div>
        </>
    );
}