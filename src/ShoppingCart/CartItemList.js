import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));
export default function CartItemList(props) {
    const {products, total} = props;

    const classes = useStyles();
    return (
        <React.Fragment>
            { total !== null && (<Typography variant="h6" gutterBottom>
                Productos
            </Typography>)}
            <List disablePadding>
                {!products.length>0 ? (
                    <ListItem className={classes.listItem}>
                        <ListItemText secondary="Tu carrito está vacío" />
                    </ListItem>
                ) : ''}
                {products.map((product, index) => (
                    <ListItem className={classes.listItem} key={index}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                {total !== null && (<ListItem className={classes.listItem}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        ${total}
                    </Typography>
                </ListItem>)}
            </List>
        </React.Fragment>
    )
}