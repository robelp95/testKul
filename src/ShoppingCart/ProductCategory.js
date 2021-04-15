import GridList from "@material-ui/core/GridList";
import Product from "./Product";
import React from "react";

export default function ProductCategory(props){
    const {
        products,
        onAddToCart,
        onRemoveFromCart,
        submitting,
        onRemoveItemFromCart,
        onToggleDisableItem,
        editMode,
        setProductById,
        setOpen,
        setEditting,
    } = props;


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
                                             onRemoveFromCart={onRemoveFromCart}
                                             submitting={submitting}
                                             onRemoveItemFromCart={onRemoveItemFromCart}
                                             onToggleDisableItem={onToggleDisableItem}
                                             editMode={editMode}

                                             setProductById={setProductById}

                                             setOpen={setOpen}
                                             setEditting={setEditting}
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