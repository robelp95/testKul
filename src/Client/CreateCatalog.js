import React, {useState} from "react";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import CartButtonsWithDialog from "./CartButtonsWithDialog";
import * as _ from 'lodash';
import {getCategoriesFromProducts} from "../utils/utils";
import {useCommonStyles} from "../utils/commonStyles";
import EmptyCartMessage from "../ShoppingCart/EmptyCartMessage";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";


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

const initProduct = {id: 0, name: "", desc: "", price: "",category: "", added: false, enabled: true};

export default function CreateCatalog({productList, editMode, setNotify}) {

    const [products, setProducts] = useState(productList);
    const [product, setProduct] = useState(initProduct);
    const productCategories = getCategoriesFromProducts(products);
    const [categories, setCategories] = useState(productCategories);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);


    const addProduct = (prod) => {
        let newProductos = _.union(products, [prod]);
        setProducts(newProductos);
        setProduct(initProduct);
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
        setProduct(initProduct);
    }

    function setProductById(id){
        let prod = _.filter(products, function (elem) {
            return elem.id === id;
        })[0] || {};
        setProduct(prod ? prod : initProduct)
    }

    const classes = useCommonStyles();
    const altClasses = useStyles();

    return (
        <>
            <div className={classes.layout}>

                {products.length === 0 && (
                    <EmptyCartMessage/>
                )}
                {products.length > 0 &&
                (
                    <ScrollableTabsButtonAuto
                        products ={products}
                        submitting={false}
                        onRemoveItemFromCart={onRemoveItemFromCart}
                        onToggleDisableItem={onToggleDisableItem}
                        editMode={editMode}
                        editProduct={editProduct}
                        open={openEdit}
                        setOpen={setOpenEdit}
                        setCategories={setCategories}
                        setProductById={setProductById}
                        product={product}
                        setProduct={setProduct}
                    />
                )
                }
                <CartButtonsWithDialog
                    open={openAdd}
                    setOpen={setOpenAdd}
                    addProduct={addProduct}
                    editProduct={editProduct}
                    editMode={editMode}
                    categories={categories}
                    setCategories={setCategories}
                    product={product}
                    setProduct={setProduct}
                    setProductById={setProductById}
                />
                <pre>
                    {JSON.stringify(products, null, 2)}
                </pre>
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