import GridList from "@material-ui/core/GridList";
import Product from "./Product";
import React from "react";

export default function ProductCategory(props){
    const {categories, onAddToCart} = props;
    return (
        <>
            {
                categories.map((category, index) =>
                    (
                        <div key={index}>
                            <h3>{category.nombre}</h3>
                            <GridList
                                cellHeight="auto"
                                cols={0}
                                spacing={5}
                                container="true"
                            >
                                {category["productos"].map( (product, index2) =>(
                                    <Product key={index2} product={product} onAddToCart={() => onAddToCart(category.id, product.id)}/>
                                ))}

                            </GridList>
                        </div>
                    ))
            }



        </>
    )
}