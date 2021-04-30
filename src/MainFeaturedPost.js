import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from "@material-ui/core/Chip";
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        textAlign: "center",
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainFeaturedPost(props) {
    const classes = useStyles();
    const {description, image, opening, address, brandName, open, phoneNumber} = props.post;
    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image}), url(https://source.unsplash.com/random)`}}>
            {<img style={{ display: 'none' }} src={image} alt={brandName} />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {brandName}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {description}
                        </Typography>

                        <Typography variant="h6" color="inherit" paragraph>
                            Horario: {opening}
                        </Typography>
                        <Typography variant="h6" color="inherit" paragraph>
                            Direccion: {address}
                        </Typography>
                        <Typography variant="h6" color="inherit" paragraph>

                            {
                                open ?
                                    <Chip
                                        label="Negocio Abierto"
                                        color="primary"
                                        style={{backgroundColor:"#4caf50"}}
                                    /> :
                                    <Chip
                                        label="Negocio Cerrado"
                                        color="primary"
                                        style={{backgroundColor:"#f44336"}}
                                    />
                            } {phoneNumber}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.object,
};