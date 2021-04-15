import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CartItemList from "../ShoppingCart/CartItemList";

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

export default function Review({userData, client, order}) {
    const clientDetail = [
        { name: 'Tipo de envio', detail: client.deliveryType },
        { name: 'Nombre', detail: client.firstName + ' ' + client.lastName },
        { name: 'Numero de contacto', detail: client.phoneNumber },
        { name: 'Direccion', detail: client.address1 + ' ' + client.address2 },
        { name: 'Comentario', detail: client.comment },
        { name: 'Horario de atencion', detail: userData.opening },
    ];
    const shippingCost = order.total >= userData.minDelivery  ? "Gratis" : userData.coin+''+userData.deliveryCharge;



    const classes = useStyles();

    return (
        <React.Fragment>

            <CartItemList
                products={order.orderProducts}
                total={order.total}
                onDeleteFromCart={()=>{}}
                isReview={true}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        {userData.name}
                    </Typography>
                    <Typography gutterBottom>Horario atencion: {userData.opening}</Typography>
                    <Typography gutterBottom></Typography>
                    <Typography gutterBottom>{userData.phoneNumber}</Typography>
                    <Typography gutterBottom>Costo envío: {shippingCost}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Detalle de cliente
                    </Typography>
                    <Grid container>
                        {clientDetail.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}