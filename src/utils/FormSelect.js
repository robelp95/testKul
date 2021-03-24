import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function FormSelect(props){
    const {label, items, name, handleChange, error, selectValue} = props;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6}>
            <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    name={name}
                    value={selectValue}
                    onChange={handleChange}
                    error={error !== undefined}
                    className={classes.selectEmpty}
                >
                    {
                        items.map( (item) => (
                            <MenuItem name={name} value={item.value}>{item.desc}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

        </Grid>
    )
}