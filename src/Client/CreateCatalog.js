import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import FormDialog from "./FormDialog";

const useStyles = makeStyles((theme) => ({
    layout:{
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        margin: 10
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    extendedIcon: {
        // marginRight: theme.spacing(1),
    },
}));


export default function CreateCatalog() {

    const [products, setProducts] = useState([
        {
            "id": 0,
            "name": "Pequeño Plástico Zapatos",
            "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
            "price": "328.00",
            "category": "calzado",
            "added": false
        },
        {
            "id": 1,
            "name": "Guapo Plástico Raton",
            "desc": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
            "price": "319.00",
            "category": "calzado",
            "added": false
        },
        {
            "id": 2,
            "name": "Ergonómico Hormigon Camiseta",
            "desc": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
            "price": "206.00",
            "category": "pantalones",
            "added": false
        },
        {
            "id": 3,
            "name": "Artesanal Algodón Mesa",
            "desc": "The Football Is Good For Training And Recreational Purposes",
            "price": "507.00",
            "category": "calzado",
            "added": false
        }]);

    const addProduct = (prod) => {
        products.push(prod);
        setProducts(products);
    }

    const classes = useStyles();
    return (
        <>
            <div className={classes.layout}>
                <ScrollableTabsButtonAuto
                    products ={products}
                    onAddToCart={() => {}}
                    onRemoveToCart={() => {}}
                    submitting={false}
                />
                {/*<div style={{textAlign:"center"}}>*/}
                {/*    <Fab variant="extended">*/}
                {/*        <AddIcon className={classes.extendedIcon} />*/}
                {/*        Nuevo producto*/}
                {/*    </Fab>*/}
                {/*</div>*/}
                <FormDialog addProduct={addProduct}/>

            </div>

        </>
    )

}