import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React from "react";

export default function ProductDialog(props) {

    const {
        categories,
        setSelectedCategory,
        handleChange,
        actionLabel,
        product,
        setProduct,
        open,
        setOpen,
        handleProductAction,
        initialiceProduct
    } = props;


    const handleClose = () => {
        setSelectedCategory('');
        initialiceProduct();
        setOpen(false);
    };

    const productAction = () => {
        handleProductAction(product);
        handleClose();
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }

    return (
        product ? (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Crear Nuevo producto</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Complete todos los campos
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Nombre"
                    value={product ? product.name : 'asd'}
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="desc"
                    label="Descripcion"
                    value={product ? product.desc : ''}
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="price"
                    label="Precio"
                    value={product ? product.price : ''}
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
                <FormControl required style={{width:"100%"}}>
                    <InputLabel>Categorias</InputLabel>
                    <Select
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                    >
                        {
                            categories.map( (cat, index) => (
                                <MenuItem key={index} value={cat}>{cat}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={productAction} color="primary">
                    {actionLabel}
                </Button>
            </DialogActions>
        </Dialog>) : ''
    )
}