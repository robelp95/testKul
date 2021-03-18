import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import {Field} from "formik";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import {RadioGroup} from 'formik-material-ui';

export default function AddressForm({values, handleChange, errors}) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Datos del cliente
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nombre"
                        value={values.firstName}
                        error={errors.firstName !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        value={values.lastName}
                        error={errors.lastName !== undefined}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Whatsapp"
                        value={values.phoneNumber}
                        error={errors.phoneNumber !== undefined}
                        onChange={handleChange}
                        placeholder="Número de Whatsapp sin prefijo"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+569</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field component={RadioGroup} name="deliveryType">
                        <FormLabel component="legend">Tipo de envío</FormLabel>
                        <FormControlLabel
                            value="pickup"
                            name="deliveryType"
                            control={<Radio/>}
                            label="Pick-up"
                        />
                        <FormControlLabel
                            value="delivery"
                            name="deliveryType"
                            control={<Radio/>}
                            label="Delivery"
                        />
                    </Field>
                </Grid>
                {values.deliveryType === 'delivery' &&
                    <>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Dirección 1"
                                value={values.address1}
                                onChange={handleChange}
                                placeholder="Apartamento / Edificio / Localidad"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Dirección 2"
                                value={values.address2}
                                onChange={handleChange}
                                placeholder="Ciudad / Codigo Postal"
                                fullWidth
                            />
                        </Grid>
                    </>
                }

                <Grid item xs={12}>
                    <TextField
                        id="comment"
                        name="comment"
                        label="Comentario"
                        value={values.comment}
                        onChange={handleChange}
                        multiline
                        rows={2}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}