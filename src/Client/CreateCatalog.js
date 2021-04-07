import React, {useState} from "react";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import FormDialog from "./FormDialog";
import * as _ from 'lodash';
import {getCategoriesFromProducts} from "../utils/utils";
import {useCommonStyles} from "../utils/commonStyles";


export default function CreateCatalog({productList}) {

    const [products, setProducts] = useState(productList);
    const productCategories = getCategoriesFromProducts(products);

    const addProduct = (prod) => {
        // products.push(prod);
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
                <ScrollableTabsButtonAuto
                    products ={products}
                    onAddToCart={() => {}}
                    onRemoveToCart={() => {}}
                    submitting={false}
                    onRemoveItemFromCart={onRemoveItemFromCart}
                    onToggleDisableItem={onToggleDisableItem}
                    editMode={true}
                />
                <FormDialog
                    addProduct={addProduct}
                    productCategories={productCategories}
                />
            </div>

        </>
    )

}