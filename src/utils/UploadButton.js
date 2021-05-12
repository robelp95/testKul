import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function UploadButtons(props) {
    const classes = useStyles();
    const {name, handleFileUpload} = props;

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={handleFileUpload}
                name={name}
            />
            <label htmlFor="contained-button-file">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<PhotoCamera />}

                >
                    Cargar Logo
                </Button>
            </label>
        </div>
    );
}