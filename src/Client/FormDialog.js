import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {nanoid} from "nanoid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


export default function FormDialog({addProduct, productCategories}) {
    const [open, setOpen] = React.useState(false);
    const [openCategories, setOpenCategories] = React.useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [categories, setCategories] = useState(productCategories);
    const [product, setProduct] = useState({id: nanoid(), name: "", desc: "", price: "", category: "", added: false, enabled: true});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpenCategories = () => {
        setOpenCategories(true);
    };

    const handleCloseCategories = () => {
        setOpenCategories(false);
    };

    const handleAddCategory = () => {
        let cat = newCategory;
        if (cat.length > 3) {
            categories.push(cat);
            setCategories([...new Set(categories)]);
            setNewCategory("");
        }
        handleCloseCategories();

    }
    const handleChangeCategory = (e) => {
        let cat = e.target.value;
        if (cat.length > 3)
            setNewCategory(cat);

    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }

    const handleAddProduct = () => {
        if (product.name !== "" && product.category !== "" && product.price !== "" && product.desc !== ""){
            addProduct(product);
        }else{
            console.log("prod invalido");
        }
        handleClose();

    }

    const classes = useStyles();

    return (
        <div>
            <div style={{textAlign:"center"}} >
                <div className={classes.root}>
                    <Button
                        color="primary"
                        variant="contained"
                        startIcon={<AddIcon/>}
                        onClick={handleClickOpen}
                    >
                        Nuevo Producto
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        startIcon={<AddIcon/>}
                        onClick={handleClickOpenCategories}
                    >
                        Nueva categoria
                    </Button>
                </div>
            </div>

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
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="desc"
                        label="Descripcion"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="price"
                        label="Precio"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <FormControl required style={{width:"100%"}}>
                        <InputLabel id="demo-simple-select-required-label">Categorias</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            name="category"
                            value={categories[0]}
                            onChange={handleInputChange}
                        >
                            {
                                categories.map( (cat, index) => (
                                    <MenuItem key={index} name="category" value={cat}>{cat}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAddProduct} color="primary">
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openCategories} onClose={handleCloseCategories} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Agregar nueva categoria</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ingrese nueva categoria
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="categories"
                        label="Nueva Categoria"
                        onChange={handleChangeCategory}
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCategories} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAddCategory} color="primary">
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}