import GridList from "@material-ui/core/GridList";
import Product from "./Product";
import React from "react";
import * as _ from 'lodash';

export default function ProductCategory(props){
    const {products, onAddToCart} = props;
    let cat = _.map(products, p=>{return p.category});
    const categories = _.uniqWith(cat,_.isEqual);
    return (
        <>
            {
                categories.map((category, index) =>
                    (
                        <div key={index}>
                            <h3>{category}</h3>
                            <GridList
                                cellHeight="auto"
                                cols={0}
                                spacing={5}
                                container="true"
                            >
                                {
                                    _.filter(products, (p) => p["category"] == category).map(
                                        (product, index2) =>(
                                            <Product key={index2} product={product} onAddToCart={onAddToCart}/>
                                        )
                                    )
                                }

                            </GridList>
                        </div>
                    ))
            }



        </>
    )
}