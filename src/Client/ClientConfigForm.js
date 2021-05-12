import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {Field} from "formik";
import {RadioGroup} from "formik-material-ui";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import UploadButton from "../utils/UploadButton";
import FormSelect from "../utils/FormSelect";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop:"5%"
    }
}));


export default function ClientConfigForm({
                                             values,
                                             handleChange,
                                             errors,
                                             loading,
                                             dirty,
                                             coins,
                                             categories,
                                             handleFileUpload}){

    const classes = useStyles();
    const [formIsValid, setFormIsValid] = useState(dirty);

    useEffect(() => {
        if (dirty) setFormIsValid(Object.keys(errors).length === 0)
    }, [errors, values])


    return (
        <>
            <Grid item xs={12} className={classes.title}>
                <Typography component="h1" variant="h4" align="center">
                    Ajustes del negocio
                </Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email cliente"
                        value={values.email}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Descripcion"
                        value={values.description}
                        error={errors.description !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese una descripción corta sobre el negocio"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="brandName"
                        name="brandName"
                        label="Kulko.app/NombreDelNegocio"
                        value={values.brandName}
                        error={errors.brandName !== undefined}
                        placeholder="Ingrese nombre del negocio"
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="opening"
                        name="opening"
                        label="Horario de apertura"
                        value={values.opening}
                        error={errors.opening !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Recibir ordenes en este número"
                        value={values.phoneNumber}
                        error={errors.phoneNumber !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese su número sin el código del país"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormSelect
                        label="Pais"
                        items={[
                            {id:"0", name: "Chile", description: "Chile(56)"},
                        ]}
                        name="country"
                        handleChange={handleChange}
                        selectValue={0}
                        disabled={true}
                    />

                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="paymentInstructions"
                        name="paymentInstructions"
                        label="Instrucciones de pago"
                        value={values.paymentInstructions}
                        error={errors.paymentInstructions !== undefined}
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
                            checked={true}
                        />
                    </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <>
                        <img
                            src={values.image ? values.image : "https://via.placeholder.com/50"}
                            style={{width:"50px", height: "50px"}}/>
                        <UploadButton name="userImage" handleFileUpload={handleFileUpload}/>
                    </>
                </Grid>
            </Grid>
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
                    <FormSelect
                        label="Moneda"
                        items={coins}
                        name="coin"
                        handleChange={handleChange}
                        selectValue={values.coin.id}
                        disabled={true}
                        error={errors.coin}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormSelect
                        label="Categoria"
                        items={categories}
                        name="categoryId"
                        handleChange={handleChange}
                        selectValue={values.categoryId ? values.categoryId : values.category.id}
                        error={errors.categoryId}
                    />

                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.title}>
                <Typography component="h1" variant="h4" align="center">
                    Ajustes de envío
                </Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="minDelivery"
                        name="minDelivery"
                        label="Costo mínimo para envío gratis"
                        value={values.minDelivery}
                        error={errors.minDelivery !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese costo mínimo para envío gratis"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="deliveryCharge"
                        name="deliveryCharge"
                        label="Costo del envio"
                        value={values.deliveryCharge}
                        error={errors.deliveryCharge !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese costo del envio"
                        fullWidth
                    />
                </Grid>
                <Grid container spacing={6} justify={"center"} style={{marginTop: "10px"}}>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                        <Button
                            color="primary"
                            variant="outlined"
                            size="large"
                            type="submit"
                            disabled={!formIsValid || loading}
                        >
                            Guardar Ajustes
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}