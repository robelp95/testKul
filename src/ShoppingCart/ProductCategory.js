import GridList from "@material-ui/core/GridList";
import Product from "./Product";
import React from "react";
import * as _ from "lodash";

export default function ProductCategory(props){
    const {
        products,
        onAddToCart,
        onRemoveToCart,
        submitting,
        onRemoveItemFromCart,
        onToggleDisableItem,
        editMode,
        editProduct,
        setOpen,
        setProductById
    } = props;


    const getProduct = (prodId) => {
        return _.filter(products, function (elem) {
            return elem.id === prodId;
        })
    }
    const handleEditProduct = () => editProduct(getProduct())

    return (
        <>
            {
                <div>
                    <GridList
                        cellHeight={"auto"}
                    >
                        {
                            products.map(
                                (product, index2) =>(
                                    <Product key={index2}
                                             product={product}
                                             onAddToCart={onAddToCart}
                                             onRemoveToCart={onRemoveToCart}
                                             submitting={submitting}
                                             onRemoveItemFromCart={onRemoveItemFromCart}
                                             onToggleDisableItem={onToggleDisableItem}
                                             editMode={editMode}
                                             handleEditProduct={handleEditProduct}
                                             setOpen={setOpen}
                                             setProductById={setProductById}
                                    />
                                )
                            )
                        }

                    </GridList>
                </div>
            }
        </>
    )
}