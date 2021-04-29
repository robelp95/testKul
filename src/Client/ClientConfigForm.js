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
import FormSelect from "../utils/FormSelect";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop:"5%"
    }
}));


export default function ClientConfigForm({values, handleChange, errors}){

    const classes = useStyles();

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
                        id="nombreNegocio"
                        name="nombreNegocio"
                        label="Nombre del Negocio/Marca"
                        value={values.brandName}
                        error={errors.brandName !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese el nombre del negocio/marca"
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
                            {value:"0", desc: "Argentina(54)"},
                            {value:"1", desc: "Brasil(55)"},
                            {value:"2", desc: "Chile(56)"},
                        ]}
                        name="country"
                        handleChange={handleChange}
                        selectValue={values.country}
                        error={errors.country}
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
                    <UploadButton/>
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
                        items={[
                            {value:"0", desc: "Peso Chileno ($)"},
                            {value:"1", desc: "Peso Argentino ($)"},
                            {value:"2", desc: "Real Brasileño (R$)"},
                        ]}
                        name="coin"
                        handleChange={handleChange}
                        selectValue={values.coin.id}
                        error={errors.coin}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormSelect
                        label="Categoria"
                        items={[
                            {value:"0", desc: "Apparel"},
                            {value:"1", desc: "Artisanal / handcrafted goods"},
                            {value:"2", desc: "Baby care products"},
                            {value:"3", desc: "Bakery"},
                            {value:"4", desc: "Bar / club / lounge"},
                            {value:"5", desc: "Beauty &amp; cosmetics"},
                            {value:"6", desc: "Cafe / coffee shop"},
                            {value:"7", desc: "Caterer"},
                            {value:"8", desc: "Consumer electronics"},
                            {value:"9", desc: "Delivery only restaurant"},
                            {value:"10", desc: "Fashion accessories"},
                            {value:"11", desc: "Fitness &amp; sports"},
                            {value:"12", desc: "Flowers / greetings and gifts"},
                            {value:"13", desc: "Food &amp; beverages"},
                            {value:"14", desc: "Gadgets and accessories"},
                            {value:"15", desc: "Hawker center stall"},
                            {value:"16", desc: "Health and wellness"},
                            {value:"17", desc: "Home decor"},
                            {value:"18", desc: "Home goods / appliances and utility"},
                            {value:"19", desc: "Hotels and Hostels"},
                            {value:"20", desc: "Ice-cream parlour"},
                            {value:"21", desc: "Jewelry and watches"},
                            {value:"22", desc: "Life hack products"},
                            {value:"23", desc: "Marketing agency"},
                            {value:"24", desc: "Pet products"},
                            {value:"25", desc: "Pop-up event stall"},
                            {value:"26", desc: "Pre order and catering"},
                            {value:"27", desc: "Restaurant"},
                            {value:"28", desc: "Street food cart"},
                            {value:"29", desc: "Takeaway"},
                            {value:"30", desc: "Toys &amp; children products"},
                            {value:"31", desc: "Video games / consoles / and accessory"},
                            {value:"32", desc: "Web Development agency"},
                        ]}
                        name="category"
                        handleChange={handleChange}
                        selectValue={values.category.id}
                        error={errors.category}
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
                        >
                            Guardar Ajustes
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}