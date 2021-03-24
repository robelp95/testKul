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

export default function ShoppingCartForm({values, handleChange, errors}){


    return (
        <>
            <Grid item xs={12} style={{marginTop:"5%"}}>
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
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Recibir ordenes en este número"
                        value={values.address}
                        error={errors.address !== undefined}
                        onChange={handleChange}
                        placeholder="Ingrese su número sin el código del país"
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
                        selectValue={values.coin}
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
                        selectValue={values.category}
                        error={errors.category}
                    />

                </Grid>
            </Grid>
        </>
    )
}