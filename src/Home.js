import React from "react";
import {useCommonStyles} from "./utils/commonStyles";

export default function Home() {
    const classes= useCommonStyles();
    return (
        <div>

            <div style={{textAlign: "center"}} className={classes.layout}>
                <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s"
                    data-wow-delay="0.2s">Bienvenido a</h3>
                <img className="wow fadeInLeftBig" data-wow-duration="1s"
                     data-wow-delay="0.5s" src="assets/images/Purple.png" alt="brand"/>
                <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s"
                    data-wow-delay="0.5s">Inicia sesion para continuar</h2>
                <br/>
            </div>
        </div>
    )
}