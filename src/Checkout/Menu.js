import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React, {useEffect, useState} from "react";
import {nanoid} from 'nanoid';
import * as _ from 'lodash';
import PartialCart from "../ShoppingCart/PartialCart";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import ScrollToCheckout from "../ScrollToCheckout";
import Fab from "@material-ui/core/Fab";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useCommonStyles} from "../utils/commonStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {GET_MENU_BY_BRANDNAME_ENDPOINT,} from "../Api/Contants";
import axios from "axios";
import {Redirect, useParams} from "react-router";
import PropTypes from "prop-types";


export default function Menu({editMode, setNotify}) {

    const [orderNumber] = useState(nanoid());
    const [products, setProducts] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [orderProducts, setOrderProducts] = useState([]);
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(true);

    const { name } = useParams();

    function useNull() {
        return null;
    }
    const fetchMenu = async (name) => {
        const response = await axios.get(GET_MENU_BY_BRANDNAME_ENDPOINT + name).catch(useNull);
        return response.data;
    }

    useEffect(async () => {
        try {
            const data = await fetchMenu(name);
            setState(data);
            setProducts(data.menu.products);
        }catch (e) {
            console.log(e, 'err');
        }
        setLoading(false);
    }, []);

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
            {!loading && state === null ? (<Redirect
                to={{
                    pathname: "/home",
                    state: { from: '/menu' }
                }}
            />):
            loading ? <div style={{textAlign: "center"}} className={classes.layout}><CircularProgress /></div>:
                (
                <>
                    <MainFeaturedPost
                        post={{
                            description: state.description,
                            image: state.image ? state.image : 'https://source.unsplash.com/random',
                            opening: state.opening,
                            category: state.category,
                            coin: state.coin,
                            address: state.address,
                            brandName: state.brandName,
                            open: state.open,
                            paymentInstructions: state.paymentInstructions,
                            phoneNumber: state.phoneNumber
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
                        order={{orderProducts, orderNumber, total, user:{
                                minDelivery: state.minDelivery,
                                coin: state.userCoin.description,
                                deliveryCharge: state.deliveryCharge,
                                paymentInstructions: state.paymentInstructions
                            }}}
                        setSubmitting={setSubmitting}
                        userData={state}
                    />

                    <ScrollToCheckout>
                    <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <ShoppingCartIcon />
                    </Fab>
                    </ScrollToCheckout>
                    </div>
                </>
                )
            }
        </>
    );
}

Menu.propTypes = {
    editMode: PropTypes.bool,
    setNotify: PropTypes.func,
};