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

const useStyles = makeStyles({
    root: {
    },
    card: {
        width: 500,
        display: 'flex',
        flexDirection: 'row',
    },
    cardMedia: {
        width: 151,
        // paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        width:50
    },
});
export default function CartItem() {

    const classes = useStyles();

    return (
        <div>
            <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Nombre producto
                        </Typography>
                        <Typography>
                            Descripción producto
                        </Typography>
                        <Typography>
                            $ 250
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                        <IconButton>
                            <AddIcon></AddIcon>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}