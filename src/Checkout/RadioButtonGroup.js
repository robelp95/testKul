import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface Props{
    setdeliveryType: () => void
}
export default function RadioButtonsGroup({value, setValue}) {


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Tipo de envío</FormLabel>
            <RadioGroup aria-label="envio" name="envio" value={value} onChange={handleChange}>
                <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
                <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
            </RadioGroup>
        </FormControl>
    );
}
