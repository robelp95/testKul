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


export default function Menu({productList, editMode, setNotify, userData}) {


    const [orderNumber] = useState(nanoid());
    const [products] = useState(productList);
    const [submitting, setSubmitting] = useState(false);
    const [orderProducts, setOrderProducts] = useState([]);
    const [user] = useState(userData);

    const onAddToCart = (product) => {
        product.added = true;
        let qty = product.quantity ? (product.quantity + 1): 1;
        product.quantity = qty;
        let exists = _.filter(orderProducts, (e) => {
            return e.id === product.id
        }).length>0;

        if(!orderProducts.length>0) {
            setOrderProducts(orderProducts => [...orderProducts, product]);
        }else {
            if (!exists){
                setOrderProducts(orderProducts => [...orderProducts, product]);
            }else{
                setOrderProducts(orderProducts => orderProducts.map((p) => {
                    return p.id === product.id ? product : p;
                }));
            }
        }
        setNotify({isOpen:true, message: 'Item agregado al carrito', type:'success'});
    }

    //Diminish one item
    const onRemoveFromCart = (product) => {
        let needsDeletion = !Math.max(0, product.quantity -1) > 0;
        if (needsDeletion) {
            onDeleteFromCart(product);
            return;
        }
        let qty = product.quantity-1;
        product.quantity = qty;
        setOrderProducts(orderProducts => orderProducts.map((p) => {
            return p.id === product.id ? product : p;
        }));

        setNotify({isOpen:true, message: 'Item eliminado al carrito', type:'info'});
    }

    //Completely delete item from cart
    const onDeleteFromCart = (product) => {
        product.added = false;
        product.quantity= 0;
        let copy = _.filter(orderProducts, (e) => {
            return e.id !== product.id
        });
        setOrderProducts(copy);
        setNotify({isOpen:true, message: 'Item eliminado del carrito', type:'info'});
    }

    const total = _.sum(orderProducts.map((product) => parseInt(product.quantity)*parseInt(product.price))) || 0;
    const classes = useCommonStyles();

    return (
        <>
            <MainFeaturedPost
                post={{
                    title: user.name,
                    description: user.description,
                    image: user.imagePath ? user.imagePath : 'https://source.unsplash.com/random',
                    imgText: 'main image description',
                    opening: user.opening,
                    category: user.category,
                    coin:user.coin,
                    address: user.address,
                    brandName: user.brandName,
                    open: user.open,
                    paymentInstructions: user.paymentInstructions,
                    phoneNumber: user.phoneNumber
                }}
            />

            <div className={classes.layout}>
                <ScrollableTabsButtonAuto
                    products ={products}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                    submitting={submitting}
                    editMode={editMode}
                    setProductById={() => {}}
                />
               <PartialCart
                   products={orderProducts}
                   onDeleteFromCart={onDeleteFromCart}
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
                    order={{orderProducts, orderNumber, total}}
                    setSubmitting={setSubmitting}
                    userData={userData}
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