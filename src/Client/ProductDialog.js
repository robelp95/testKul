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
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import UploadButton from "../utils/UploadButton";
import convertToBase64 from "../utils/convertToBase64";

const formSchema = Yup.object().shape({
    name: Yup.string().required(undefined),
    description: Yup.string().required(undefined),
    price: Yup.string().matches(/^[0-9]{1,8}$/).required(undefined),
    category: Yup.string().required(undefined),
});


export default function ProductDialog(props) {

    const {
        categories,
        actionLabel,
        product,
        setProduct,
        open,
        setOpen,
        handleProductAction,
        initialiceProduct
    } = props;

    useEffect(() => {
        if (open){
            formSchema.isValid(product).then(valid => setFormIsValid(valid));
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const handleClose = () => {
        initialiceProduct();
        setOpen(false);
    };

    const handleFileUpload = async (file) => {
        let base64 = await convertToBase64(file);
        product.base64Image= base64;
    }

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
                    value={product ? product.name : ''}
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="description"
                    label="Descripcion"
                    value={product ? product.description : ''}
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
                        onChange={handleInputChange}
                    >
                        {
                            categories.map( (cat, index) => (
                                <MenuItem key={index} value={cat}>{cat}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl required style={{width:"100%"}}>
                    <img
                        src={product.image ? product.image : "https://via.placeholder.com/50"}
                        style={{width:"50px", height: "50px"}}/>
                    <UploadButton name="userImage" handleFileUpload={handleFileUpload}/>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={productAction} color="primary" disabled={!formIsValid}>
                    {actionLabel}
                </Button>
            </DialogActions>
        </Dialog>) : ''
    )
}