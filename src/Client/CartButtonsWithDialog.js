import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProductDialog from "./ProductDialog";

const { customAlphabet } = require('nanoid')

const nanoid = customAlphabet('1234567890', 3)

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    centered: {
        textAlign: "center"
    }
}));


const initProduct = {id: 0, name: "", desc: "", price: "",category: "", added: false, enabled: true};

export default function CartButtonsWithDialog({open, setOpen, addProduct, editProduct, editMode, categories, setCategories, product, setProduct, setProductById}) {
    const [openCategories, setOpenCategories] = React.useState(false);
    const [newCategory, setNewCategory] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");




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

    const handleAddProduct = (product) => {
        if (product.name !== "" && selectedCategory !== "" && product.price !== "" && product.desc !== ""){
            product.category = selectedCategory;
            if (!product.id) {
                product.id = nanoid();
            }
            addProduct(product);
        }

        handleClose();

    }

    const classes = useStyles();

    return (
        <div>
            <div className={classes.centered}>
                <div className={classes.root}>
                    <Button
                        color="primary"
                        variant="contained"
                        startIcon={<AddIcon/>}
                        onClick={handleClickOpen}
                        disabled={!categories.length > 0}
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

            <ProductDialog
                categories={categories}
                selectedCategory={selectedCategory}
                handleChange={handleChange}
                handleInputChange={handleInputChange}
                handleProductAction={handleAddProduct} //edit o insert
                actionLabel="Agregar"
                product={product}
                setProduct={setProduct}
                setProductById={setProductById}
                open={open}
                setOpen={setOpen}
            />
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