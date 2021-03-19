import GridList from "@material-ui/core/GridList";
import Product from "./Product";
import React from "react";

export default function ProductCategory(props){
    const {products, onAddToCart, onRemoveToCart, submitting} = props;
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
                                             submitting={submitting}/>
                                )
                            )
                        }

                    </GridList>
                </div>
            }
        </>
    )
}