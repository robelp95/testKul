import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function SwitchLabels(props) {
    const {product, handleToggleDisableItem} = props;

    const handleChange = () => {
        handleToggleDisableItem(product)
    };

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Switch
                        checked={product.enabled}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                    />
                }
            />
            <FormHelperText>Activar</FormHelperText>
        </FormControl>
    );
}
