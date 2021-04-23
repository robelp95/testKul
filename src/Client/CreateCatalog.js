import React, {useContext, useEffect, useState} from "react";
import * as _ from 'lodash';
import {getCategoriesFromProducts} from "../utils/utils";
import {useCommonStyles} from "../utils/commonStyles";
import EmptyCartMessage from "../ShoppingCart/EmptyCartMessage";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CreateCatalogBody from "./CreateCatalogBody";
import {UserContext} from "../UserContext";


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

const initProduct = {id: -1, name: "", desc: "", price: "",category: "", added: false, enabled: true};

export default function CreateCatalog({productList, editMode, setNotify, userData, fetchProducts, fetchUser}) {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(initProduct);
    const productCategories = getCategoriesFromProducts(products);
    const [categories, setCategories] = useState(productCategories);
    const [open, setOpen] = React.useState(false);

    const { user } = useContext(UserContext);


    useEffect(async () => {
        const prods = await fetchProducts(user.id);
        setProducts(prods);
    }, []);

    const initialiceProduct = () => {
        setProduct(initProduct);
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
                            onClick={() => setNotify({isOpen:true, message: 'Carrito actualizado', type:'success'})}
                        >
                            Guardar carrito
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )

}