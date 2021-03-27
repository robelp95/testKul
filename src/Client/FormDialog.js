import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [openCategories, setOpenCategories] = React.useState(false);
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState(["calzado", "pantalones"]);

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
        let cat = category;
        if (cat.length > 3) {
            categories.push(cat);
            setCategories([...new Set(categories)]);
            setCategory("");
        }

    }
    const handleChangeCategory = (e) => {
        let cat = e.target.value;
        if (cat.length > 3)
            setCategory(cat);

    }

    return (
        <div>
            <div style={{textAlign:"center"}} >
                <Fab variant="extended" onClick={handleClickOpen}>
                    <AddIcon/>
                    Nuevo producto
                </Fab>
                <Fab variant="extended" onClick={handleClickOpenCategories}>
                    <AddIcon/>
                    Nueva categoria
                </Fab>
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
                        id="name"
                        label="Nombre"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="desc"
                        label="Descripcion"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Precio"
                        type="text"
                        fullWidth
                    />
                    <FormControl required style={{width:"100%"}}>
                        <InputLabel id="demo-simple-select-required-label">Categorias</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            name="categories"
                            value=""
                            onChange={() => {}}
                        >
                            {
                                categories.map( (cat, index) => (
                                    <MenuItem key={index} name="categories" value={index}>{cat}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
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
                        id="category"
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
