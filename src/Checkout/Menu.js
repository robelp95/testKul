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
        "categorias": [
            {
                "id": 0,
                "nombre": "Violeta",
                "productos": [
                    {
                        "id": 0,
                        "nombre": "Sorprendente Acero Pelota",
                        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                        "price": "462.00"
                    },
                    {
                        "id": 1,
                        "nombre": "Sorprendente Algodón Mesa",
                        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                        "price": "530.00"
                    },
                    {
                        "id": 2,
                        "nombre": "Práctico Granito Ordenador",
                        "descripcion": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                        "price": "101.00"
                    },
                    {
                        "id": 3,
                        "nombre": "Refinado Metal Coche",
                        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                        "price": "615.00"
                    },
                    {
                        "id": 4,
                        "nombre": "Práctico Madera Raton",
                        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                        "price": "761.00"
                    }
                ]
            },
            {
                "id": 1,
                "nombre": "Blanco",
                "productos": [
                    {
                        "id": 0,
                        "nombre": "Sorprendente Madera Pollo",
                        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                        "price": "536.00"
                    },
                    {
                        "id": 1,
                        "nombre": "Guapo Granito Pantalones",
                        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                        "price": "296.00"
                    },
                    {
                        "id": 2,
                        "nombre": "Inteligente Acero Gorro",
                        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                        "price": "760.00"
                    },
                    {
                        "id": 3,
                        "nombre": "Inteligente Madera Atún",
                        "descripcion": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                        "price": "195.00"
                    },
                    {
                        "id": 4,
                        "nombre": "Guapa Algodón Pollo",
                        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                        "price": "977.00"
                    }
                ]
            },
            {
                "id": 2,
                "nombre": "Negro",
                "productos": [
                    {
                        "id": 0,
                        "nombre": "Genérico Hormigon Patatas fritas",
                        "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                        "price": "156.00"
                    },
                    {
                        "id": 1,
                        "nombre": "Guapa Metal Pescado",
                        "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                        "price": "688.00"
                    },
                    {
                        "id": 2,
                        "nombre": "Sorprendente Algodón Bacon",
                        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                        "price": "922.00"
                    },
                    {
                        "id": 3,
                        "nombre": "Guapa Hormigon Ordenador",
                        "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                        "price": "374.00"
                    },
                    {
                        "id": 4,
                        "nombre": "Rústico Ladrillo Pescado",
                        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                        "price": "854.00"
                    }
                ]
            }
        ]
    };
export default function Menu() {

    const [order, setOrder] = useState({
        orderNumber: nanoid(),
        products: [{
        }],
        total: null
    });
    const onAddToCart = (categoryId, productId, qty) => {
        let product =catalog["categorias"][categoryId]["productos"][productId];
        console.log("Update cart con producto: ", product);
    }
    const [catalog, setCatalog] = useState(initialCatalog);
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
                <ProductCategory
                    categories ={catalog["categorias"]}
                    onAddToCart={onAddToCart}
                />
                <pre>{JSON.stringify(catalog, null, 1)}</pre>
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