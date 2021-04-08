import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default function EditProductDialog({categories, existingProduct, setExistingProduct, editProductDialog}) {
    const [open, setOpen] = React.useState( false);
    const [product, setProduct] = useState(existingProduct);
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
        setOpen(existingProduct ? true : false);
        if (existingProduct) setSelectedCategory(product.category);
    }, [existingProduct])

    const handleClose = () => {
        setExistingProduct(false);
        setOpen(false);
    };

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }

    const handleEditProduct = () => {
        if (product.name !== "" && selectedCategory !== "" && product.price !== "" && product.desc !== ""){
            product.category = selectedCategory;
            // product.id = nanoid();
            editProductDialog(product);
        }
        setExistingProduct(false);
    }

    return (
        <div>
            <pre>
                {JSON.stringify(product, null, 2)}
            </pre>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Producto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Complete todos los campos
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Nombre"
                        value={existingProduct ? existingProduct.name : ''}
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="desc"
                        value={existingProduct ? existingProduct.desc : ''}
                        label="Descripcion"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="price"
                        value={existingProduct ? existingProduct.price : ''}
                        label="Precio"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <FormControl required style={{width:"100%"}}>
                        <InputLabel>Categorias</InputLabel>
                        <Select
                            name="category"
                            value={selectedCategory}
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
                    <Button onClick={handleEditProduct} color="primary">
                        Actualizar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}