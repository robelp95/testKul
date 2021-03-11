import React from "react";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(0),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 4),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0),
    }
}));

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CardGrid(){
    const classes = useStyles();
    const random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="sm">
                <h2>Categoria producto ({random} productos)</h2>
                {/* End hero unit */}
                <Grid container spacing={2}>
                    {cards.slice(0, random).map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={6}>
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
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Agregar al carrito
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}