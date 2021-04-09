import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React, {useState} from "react";
import {nanoid} from 'nanoid';
import * as _ from 'lodash';
import PartialCart from "../ShoppingCart/PartialCart";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import ScrollToCheckout from "../ScrollToCheckout";
import Fab from "@material-ui/core/Fab";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useCommonStyles} from "../utils/commonStyles";


export default function Menu({productList, editMode, setNotify}) {


    const [orderNumber] = useState(nanoid());
    const [products] = useState(productList);
    const [submitting, setSubmitting] = useState(false);
    const [orderProducts, setOrderProducts] = useState([]);

    const onAddToCart = (product, qty) => {
        product.added = true;

        setOrderProducts(products => [...products, product]);

        setNotify({isOpen:true, message: 'Item agregado al carrito', type:'success'});
    }
    const onRemoveToCart = (product, qty) => {
        product.added = false;
        let copy = _.filter(orderProducts, (e) => {
            return e.id !== product.id
        });
        setOrderProducts(copy);
        setNotify({isOpen:true, message: 'Item eliminado del carrito', type:'info'});
    }

    const total = _.sum(products.map((product) => parseInt(product.price))) || 0;
    const classes = useCommonStyles();

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
                    products ={products}
                    onAddToCart={onAddToCart}
                    onRemoveToCart={onRemoveToCart}
                    submitting={submitting}
                    editMode={editMode}
                    setProductById={() => {}}
                />
               <PartialCart products={orderProducts}/>
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
                    order={{orderProducts, orderNumber, total}}
                    setSubmitting={setSubmitting}
                />

                <ScrollToCheckout>
                    <Fab color="primary" size="medium" aria-label="scroll back to top">
                        <ShoppingCartIcon />
                    </Fab>
                </ScrollToCheckout>
            </div>
        </>
    );
}