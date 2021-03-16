import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Grid} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Hidden from "@material-ui/core/Hidden";
import * as _ from 'lodash';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    card: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
    },
    cardMedia: {
        width: 151,
        // paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        width:70
    },
});
export default function Product({product, onAddToCart}) {

    const {id, nombre, descripcion, price, quantity} = product;
    const classes = useStyles();

    const handleAddToCart = (categoryId) => onAddToCart(categoryId,id, 1);

    return (
        <div className={classes.root} style={{margin: "auto", paddingTop:5, paddingBottom:5}}>
            <Grid  item xs={12} sm={10} style={{margin: "auto"}}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {nombre} {quantity ? '- `${quantity}`': ''}
                        </Typography>
                        <Typography>
                            {_.truncate(descripcion, {length: 30})}
                        </Typography>
                        <Typography>
                            ${price}
                        </Typography>
                        <Hidden smUp>
                            <IconButton disabled={true}>
                                <DeleteIcon disabled={true} />
                            </IconButton>
                            <IconButton onClick={handleAddToCart}>
                                <AddIcon/>
                            </IconButton>
                        </Hidden>
                    </CardContent>
                    <Hidden xsDown>
                        <CardActions>
                            <IconButton disabled={true}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton onClick={handleAddToCart}>
                                <AddIcon/>
                            </IconButton>
                        </CardActions>
                    </Hidden>
                </Card>
            </Grid>
        </div>
    )
}