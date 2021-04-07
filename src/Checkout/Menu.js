import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React, {useState} from "react";
import {nanoid} from 'nanoid';
import * as _ from 'lodash';
import PartialCart from "../ShoppingCart/PartialCart";
import Notification from "../ShoppingCart/Notification";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import ScrollToCheckout from "../ScrollToCheckout";
import Fab from "@material-ui/core/Fab";
import {CreditCard} from '@material-ui/icons';
import {useCommonStyles} from "../utils/commonStyles";


export default function Menu({productList}) {


    const [orderNumber] = useState(nanoid());
    const [products] = useState(productList);
    const [submitting, setSubmitting] = useState(false);
    const [orderProducts, setOrderProducts] = useState([]);

    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});

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
                    editMode={false}
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