import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(name, date, deliveryType, customerName, customerPhoneNumber, price, products) {
    return {
        name,
        date,
        deliveryType,
        customerName,
        customerPhoneNumber,
        price,
        products
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    function parseDate(date) {
        let t = date.split(/[- :]/);
        return (t[2] + '/' + (t[1]-1) + '/' + t[0]);
    }
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {parseDate(row.createdAt) }
                </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.client}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Pedido
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Producto</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Total ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((prod, index) =>(
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {prod.name}
                                            </TableCell>
                                            <TableCell align="right">{prod.quantity}</TableCell>
                                            <TableCell align="right">
                                                {parseInt(prod.price) * parseInt(prod.quantity)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                total: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
};

const rows = [
    createData(1,"20/12/2019", "Delivery", "Anibal", "+56915456543", 165, 3.99),
    createData(2, "08/04/2020","Pickup", "Ana", "+569154565321", 43, 4.99),
    createData(3, "11/10/2020", "Pickup", "Ana", "+569154565321", 105, 503),
    createData(4, "21/01/2021", "Delivery", "Miguel", "+56915766543", 907, 2.5),
];

export default function CollapsibleTable(props) {
    const {orders} = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Nro pedido</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell align="right">Tipo de entrega</TableCell>
                        <TableCell align="right">Cliente</TableCell>
                        <TableCell align="right">Contacto</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row, index) => (
                        <Row key={row.index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
