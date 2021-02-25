import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioButtonGroup from "./RadioButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function AddressForm({handleChange}) {

    const [value, setValue] = React.useState('delivery');
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
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="whatsapp"
                        name="whatsapp"
                        label="Whatsapp"
                        placeholder="Número de Whatsapp"
                        fullWidth
                        autoComplete="numero whatsapp"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+56</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <RadioButtonGroup value={value} setValue={setValue} />
                </Grid>
                {value ==='delivery' &&
                <>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Dirección 1"
                            placeholder="Apartamento / Edificio / Localidad"
                            fullWidth
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Dirección 2"
                            placeholder="Ciudad / Codigo Postal"
                            fullWidth
                            autoComplete="shipping address-line2"
                        />
                    </Grid>
                </>
                }

                <Grid item xs={12}>
                    <TextField
                        id="multiline"
                        label="Comentario"
                        multiline
                        rows={2}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}