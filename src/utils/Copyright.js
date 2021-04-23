import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export default function Copyright() {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit">
                    Kulko.app
                </Link>{' '}
                {new Date().getFullYear()} {' '}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link target="_blank" color={"inherit"} href="https://docs.google.com/document/d/1hnUo5Lw9fsxojvbMkO2k7Go9RfyddLSUSMdBf6Gh1Os/edit?usp=sharing">
                    Términos y condiciones
                </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link target="_blank" color={"inherit"} href="https://docs.google.com/document/d/1sv2CL8RAGXF4AfrQNESQmZ9W40ZRCrq39KbWjPW43Lc/edit?usp=sharing">
                    Políticas de privacidad
                </Link>
            </Typography>
        </>
    );
}