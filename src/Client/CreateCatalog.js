import React, {useState} from "react";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import CartButtonsWithDialog from "./CartButtonsWithDialog";
import * as _ from 'lodash';
import {getCategoriesFromProducts} from "../utils/utils";
import {useCommonStyles} from "../utils/commonStyles";
import EmptyCartMessage from "../ShoppingCart/EmptyCartMessage";

export default function CreateCatalog({productList}) {

    const [products, setProducts] = useState(productList);
    const productCategories = getCategoriesFromProducts(products);
    const [categories, setCategories] = useState(productCategories);


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

    const classes = useCommonStyles();

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
                        onAddToCart={() => {}}
                        onRemoveToCart={() => {}}
                        submitting={false}
                        onRemoveItemFromCart={onRemoveItemFromCart}
                        onToggleDisableItem={onToggleDisableItem}
                        editMode={true}
                    />
                )
                }
                <CartButtonsWithDialog
                    addProduct={addProduct}
                    categories={categories}
                    setCategories={setCategories}
                />
            </div>

        </>
    )

}