import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import * as _ from 'lodash';

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

export default function Review({client, order}) {
    const clientDetail = [
        { name: 'Tipo de envio', detail: client.deliveryType },
        { name: 'Nombre', detail: client.firstName + ' ' + client.lastName },
        { name: 'Numero de contacto', detail: client.phoneNumber },
        { name: 'Direccion', detail: client.address1 + ' ' + client.address2 },
        { name: 'Comentario', detail: client.comment },
    ];

    const total = _.sum(order.products.map((product) => parseInt(product.price))) || 0;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Productos
            </Typography>
            <List disablePadding>
                {order.products.map((product, index) => (
                    <ListItem className={classes.listItem} key={index}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        ${total}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Nombre Negocio
                    </Typography>
                    <Typography gutterBottom>Horario atencion</Typography>
                    <Typography gutterBottom></Typography>
                    <Typography gutterBottom>+56 {client.phoneNumber}</Typography>
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