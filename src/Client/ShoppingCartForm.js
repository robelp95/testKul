import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {Field} from "formik";
import {RadioGroup} from "formik-material-ui";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import UploadButton from "../utils/UploadButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function ShoppingCartForm({values, handleChange, errors}){

    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Datos del Negocio
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="nombreNegocio"
                        name="nombreNegocio"
                        label="Nombre del Negocio/Marca"
                        value={values.businessName}
                        error={errors.businessName !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese el nombre del negocio/marca"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="descripcion"
                        name="descripcion"
                        label="Descripcion"
                        value={values.businessDescripcion}
                        error={errors.businessDescripcion !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese una descripción corta sobre el negocio"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="businessUrl"
                        name="businessUrl"
                        label="Kulko.app/NombreDelNegocio"
                        value={values.businessUrl}
                        error={errors.businessUrl !== undefined}
                        placeholder="Ingrese nombre del negocio"
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="schedule"
                        name="schedule"
                        label="Horario de apertura"
                        value={values.schedule}
                        error={errors.schedule !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="paymentType"
                        name="paymentType"
                        label="Instrucciones de pago"
                        value={values.paymentType}
                        error={errors.paymentType !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese instrucciones de pago (Efectivo/Transferencia/Medio de Pago)"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field component={RadioGroup} name="orderVia">
                        <FormLabel component="legend">Recibir ordenes por</FormLabel>
                        <FormControlLabel
                            value="whatsapp"
                            name="orderVia"
                            control={<Radio/>}
                            label="Whatsapp"
                            checked="true"
                        />
                    </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <UploadButton/>
                </Grid>
            </Grid>
            <div>
                <Typography variant="h6" gutterBottom>
                    Datos del Cliente
                </Typography>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Tu nombre"
                        value={values.name}
                        error={errors.name !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Descripcion"
                        value={values.description}
                        error={errors.description !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Direccion del Negocio"
                        value={values.address}
                        error={errors.address !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Recibir ordenes en este nímero de Whatsapp"
                        value={values.address}
                        error={errors.address !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese su número sin el código del país"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel id="demo-simple-select-required-label">Moneda</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={values.coin}
                            onChange={handleChange}
                            error={errors.coin !== undefined}
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="$">Chilean Peso($)</MenuItem>
                            <MenuItem value="R$">Brazilian Real(R$)</MenuItem>
                            <MenuItem value="$">Argentinian Peso($)</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="category"
                        name="category"
                        label="Categoria"
                        value={values.category}
                        error={errors.category !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <div>
                <Typography variant="h6" gutterBottom>
                    Ajuste de Ordenes
                </Typography>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="minDelivery"
                        name="minDelivery"
                        label="Minimo para delivery"
                        value={values.minDelivery}
                        error={errors.minDelivery !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </>
    )
}