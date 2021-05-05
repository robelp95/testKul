import React, {useContext, useEffect, useState} from "react";
import * as _ from 'lodash';
import {getCategoriesFromProducts} from "../utils/utils";
import {useCommonStyles} from "../utils/commonStyles";
import EmptyCartMessage from "../ShoppingCart/EmptyCartMessage";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CreateCatalogBody from "./CreateCatalogBody";
import {UserContext} from "../Context/UserContext";
import axios from "axios";
import {API_HEADERS, UPDATE_USER_MENU_ENDPOINT} from "../Api/Contants";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    centered: {
        textAlign: "center"
    }
}));

const initProduct = {name: "", description: "", price: "",category: "", added: false, enabled: true};

export default function CreateCatalog({editMode, setNotify, setState}) {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(initProduct);
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = React.useState(false);

    const { state } = useContext(UserContext);


    useEffect(async () => {
        setProducts(state.user.menu.products);
        setCategories(getCategoriesFromProducts(state.user.menu.products));
    }, []);

    const initialiceProduct = () => {
        setProduct(initProduct);
    }

    //TODO implement post data handler
    const postData = async (menu) => {
        const response = await axios.post(UPDATE_USER_MENU_ENDPOINT + state.user.id + '/menu',
            menu, API_HEADERS);
        const json = await response.json();
        return json;
    }
    const handleSaveCart = async () => {

        products.forEach(p => {
            delete p.added;
            delete p.image;
        });
        const prods = products ?  products.map(p => ({...p})) : [];
        const response = await axios.post(UPDATE_USER_MENU_ENDPOINT + state.user.id + '/menu', {id: state.user.menu.id, products: prods}, API_HEADERS);
        const data = await response.data;
        setState({...state, user:{
            ...state.user,
                menu: data
            }})
        setNotify({isOpen:true, message: 'Carrito actualizado', type:'success'});
    }
    const addProduct = (prod) => {
        let newProductos = _.union(products, [prod]);
        setProducts(newProductos);
    }
    const onRemoveItemFromCart = (prod) => {
        let newProducts = _.filter(products, function (elem) {
            return elem.id !== prod.id
        });
        setProducts(newProducts)
    }
    const onToggleDisableItem = (prod) => {
        let newProducts = _.map(products, function(elem) {
            return elem.id === prod.id ? {...prod, enabled: !prod.enabled} : elem;
        });
        setProducts(newProducts);
    }
    const editProduct = (prod) => {
        let newProducts = _.map(products, function (elem) {
             return elem.id === prod.id ? prod : elem;
        });
        setProducts(newProducts);
    }

    function setProductById(id){
        let prod = _.filter(products, function (elem) {
            return elem.id === id;
        })[0] || {};
        setProduct(prod)
    }

    const classes = useCommonStyles();
    const altClasses = useStyles();

    return (
        <>
            <div className={classes.layout}>

                {products.length === 0 && (
                    <EmptyCartMessage/>
                )}
                <CreateCatalogBody
                    products={products}
                    addProduct={addProduct}
                    editProduct={editProduct}
                    editMode={editMode}
                    categories={categories}
                    setCategories={setCategories}
                    product={product}
                    setProduct={setProduct}
                    setProductById={setProductById}
                    onRemoveItemFromCart={onRemoveItemFromCart}
                    onToggleDisableItem={onToggleDisableItem}
                    open={open}
                    setOpen={setOpen}
                    initialiceProduct={initialiceProduct}
                />
                <div className={altClasses.centered}>
                    <div className={altClasses.root}>
                        <Button
                            variant={"outlined"}
                            onClick={handleSaveCart}
                        >
                            Guardar carrito
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )

}