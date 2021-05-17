import React from "react";
import {useRouteMatch} from "react-router";
import {useHistory, withRouter} from 'react-router-dom';

export const LandingPage = (props) => {

    let { path, url } = useRouteMatch();
    console.log(path, 'path');
    console.log(url, 'url');
    let history = useHistory();
    const handleNavigateToApp = () => {
        history.push("/app");
    }
    return (
        <body>

        <div className="preloader">
            <div className="loader">
                <div className="ytp-spinner">
                    <div className="ytp-spinner-container">
                        <div className="ytp-spinner-rotator">
                            <div className="ytp-spinner-left">
                                <div className="ytp-spinner-circle"></div>
                            </div>
                            <div className="ytp-spinner-right">
                                <div className="ytp-spinner-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <header className="header-area">
            <div className="navbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img src="assets/images/White.png" width="111px" alt="Logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="#home">Inicio</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#features">Precios</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#about">¿Qué ofrecemos?</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#facts">Soluciones</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#team">Funcionalidades</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="navbar-btn d-none d-sm-inline-block">
                                    <span className="main-btn" data-scroll-nav="0" rel="nofollow" onClick={handleNavigateToApp}>Comienza ahora</span>
                                    {/*<a className="main-btn" data-scroll-nav="0" rel="nofollow">Comienza ahora</a>*/}
                                </div>
                            </nav>

                        </div>
                    </div>

                </div>

            </div>


            <div id="home" className="header-hero bg_cover" style={{backgroundImage: 'url(assets/images/banner-bg.svg)'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="header-hero-content text-center">
                                <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s"
                                    data-wow-delay="0.2s">Crea tu micro catálogo online</h3>
                                <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s"
                                    data-wow-delay="0.5s">Vende y recibe pedidos en WhatsApp</h2>
                                <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Obten tu
                                    URL de tienda personalizada <br/> No se requiere pasarela de pago</p>
                                <p className="text wow fadeInUp" data-wow-duration="1.3s"
                                   data-wow-delay="0.8s"> Comisiones Cero | Cancelar en cualquier momento</p>
                                <a href="#" className="main-btn wow fadeInUp" data-wow-duration="1.3s"
                                   data-wow-delay="1.1s">Ver Demo</a>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s"
                                 data-wow-delay="1.4s">
                                <img src="assets/images/header-hero.png" alt="hero" />
                            </div>

                        </div>
                    </div>

                </div>

                <div id="particles-1" className="particles"></div>
            </div>

        </header>





        <div className="brand-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
                            <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <img src="assets/images/Purple.png" width="50px" alt="brand"/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>




        <section id="features" className="services-area pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center pb-40">
                            <div className="line m-auto"></div>
                            <br/>
                                <h3 className="title">Velocidad de carga ultra rápida</h3>
                                <p>Hasta 4 veces más rápida que cualquier web (incluso que la web responsive),
                                    asegurando la mejor experiencia para el usuario.</p>
                                <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
                                    <div className="p-2 bd-highlight header-sub-title wow fadeInUp"><h5>Sin
                                        publicación.</h5></div>
                                    <div className="p-2 bd-highlight header-sub-title wow fadeInUp"><h5>Sin
                                        descarga.</h5></div>
                                    <div className="p-2 bd-highlight header-sub-title wow fadeInUp"><h5>Sin
                                        instalación.</h5></div>
                                </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>



        <section id="features" className="services-area pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center pb-40">
                            <div className="line m-auto"></div>
                            <br/>
                                <h3 className="title">PRECIOS SIMPLES Y TRANSPARENTES</h3>
                                <p>Toma de pedidos simple y llanamente👇</p>
                        </div>

                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                             data-wow-delay="0.2s">
                            <div className="services-icon">
                                <img className="shape" src="assets/images/services-shape.svg" alt="shape"/>
                                    <img className="shape-1" src="assets/images/services-shape-1.svg" alt="shape"/>
                                        <i className="lni lni-baloon"></i>
                            </div>
                            <div className="services-content mt-30">
                                <h4 className="services-title"><a href="#">MENSUAL</a></h4>
                                <p>$7.990 Neto</p>
                                <hr/>
                                    <ul style={{textAlign: "left"}}>
                                        <li>Hasta 25 Productos por Categorías</li>
                                        <li>Hasta 5 Categorías</li>
                                        <li>Recibir pedido por WhatsApp</li>
                                        <li>Utilice su propio dominio *</li>
                                        <li>Tu propio número de WhatsApp</li>
                                    </ul>
                                    <hr/>
                                    <a href="#">Inscribirse</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <div className="services-icon">
                                <img className="shape" src="assets/images/services-shape.svg" alt="shape"/>
                                    <img className="shape-1" src="assets/images/services-shape-2.svg" alt="shape"/>
                                        <i className="lni lni-cog"></i>
                            </div>
                            <div className="services-content mt-30">
                                <h4 className="services-title"><a href="#">ANUAL</a></h4>
                                <p>$59.990 Neto</p>
                                <hr/>
                                <ul style={{textAlign: "left"}}>
                                    <li>Hasta 30 Productos por Categorías</li>
                                    <li>Hasta 10 Categorías</li>
                                    <li>Recibir pedido por WhatsApp</li>
                                    <li>Utilice su propio dominio *</li>
                                    <li>Tu propio número de WhatsApp</li>
                                </ul>
                                    <hr/>
                                    <a href="#">Inscribirse</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>





        <section id="about" className="about-area pt-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <div className="section-title">
                                <div className="line"></div>
                                <h3 className="title">Gestiona tus pedidos en tu restaurante o a domicilio en
                                    minutos</h3>
                            </div>

                            <p className="text">Una herramienta fácil y sencilla, con un resultado poderoso. En pocos
                                minutos tendrás tu carta digital con todo lo necesario para mostrar tus platos y
                                servicios a tus clientes.</p>
                            <a href="#" className="main-btn">¡QUIERO COMENZAR!</a>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <img src="assets/images/about1.svg" alt="about"/>
                        </div>

                    </div>
                </div>

            </div>

            <div className="about-shape-1">
                <img src="assets/images/about-shape-1.svg" alt="shape"/>
            </div>
        </section>





        <section className="about-area pt-70">
            <div className="about-shape-2">
                <img src="assets/images/about-shape-2.svg" alt="shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-last">
                        <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <div className="section-title">
                                <div className="line"></div>
                                <h3 className="title">Recibe pedidos desde donde quieras. <span> Tu propia app de pedidos online</span>
                                </h3>
                            </div>

                            <p className="text">Toma el control de tu tiempo, comisiones y ventas. Comienza a ofrecer
                                pedidos online en un abrir y cerrar de ojos. NO TENEMOS LETRAS CHICAS Y NO COBRAMOS
                                COMISIONES. Obtén el 100% de las ganancias de tus ventas.</p>
                            <a href="#" className="main-btn">¡EMPEZAR AHORA!</a>
                        </div>

                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <img src="assets/images/about2.svg" alt="about"/>
                        </div>

                    </div>
                </div>

            </div>

        </section>




        <section className="about-area pt-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <div className="section-title">
                                <div className="line"></div>
                                <h3 className="title">Experiencia perfecta multiplataforma. <span>Control total de Experiencia Usuario desde cualquier dispositivo y sistema operativo.
                            </span>
                                </h3>
                            </div>

                            <p className="text">Mientras que una aplicación nativa pesa alrededor de 200MB, Kulko App no
                                suelen ocupar más de 0,5MB en el dispositivo móvil.
                                Gracias a su PWA, Tinder consiguió reducir en más del 90% el peso de su aplicación
                                nativa.
                            </p>
                            <a href="#" className="main-btn">VER DEMO</a>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <img src="assets/images/about3.svg" alt="about"/>
                        </div>

                    </div>
                </div>

            </div>

            <div className="about-shape-1">
                <img src="assets/images/about-shape-1.svg" alt="shape"/>
            </div>
        </section>








        <section id="facts" className="video-counter pt-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="video-wrapper">
                                <div className="video-image">
                                    <img src="assets/images/undraw_Search_re_x5gq.svg" alt="video"/>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div className="counter-content">
                                <div className="section-title">
                                    <div className="line"></div>
                                    <h3 className="title">Mejor posicionamiento SEO</h3>
                                </div>

                                <p className="text">Esenciales para páginas web, por lo que facilitan el posicionamiento
                                    en buscadores como Google. Gracias a ello, aumenta la visibilidad y presencia online
                                    de tu negocio.</p>
                            </div>

                            <div className="row no-gutters">
                                <div className="col-4">
                                    <div
                                        className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                                        <div className="counter-items text-center">
                                            <span className="count"><span className="counter">125</span>K</span>
                                            <p className="text">Descargas</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-4">
                                    <div
                                        className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                                        <div className="counter-items text-center">
                                            <span className="count"><span className="counter">87</span>K</span>
                                            <p className="text">Usuarios activos</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-4">
                                    <div
                                        className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                                        <div className="counter-items text-center">
                                            <span className="count"><span className="counter">4.8</span></span>
                                            <p className="text">Opiniones de los usuarios</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </section>

        <div className="container">
            <h2 className="text-center mt-5 pt-5">Preguntas frecuentes</h2>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h5 className="text-center">¿Consigo una tienda online?</h5>
                    <br/>
                        <p className="mb-5 text-center">¡Absolutamente! Su propia tienda de WhatsApp será,
                            https://kulko.app/tutienda</p>
                        <h5 className="text-center">Quiero mi propio servicio Kulko App con mi marca para vender a los
                            clientes</h5>
                        <br/>
                            <p className="mb-5 text-center">¡Por supuesto! ¡Proximamente!</p>
                            <h5 className="text-center">¿Cómo cobro los pagos?</h5>
                            <br/>
                                <p className="mb-5 text-center">No se requiere pasarela de pago. Puede cobrar los pagos
                                    en efectivo en el mostrador, contra reembolso, enlaces de pago, códigos QR,
                                    totalmente a su elección. ¡Asegúrate de ingresar estas instrucciones mientras
                                    configuras tu tienda kulko.app!
                                </p>
                                <h5 className="text-center">¿Hay un panel de control disponible?</h5>
                                <br/>
                                    <p className="text-center">No se requiere pasarela de pago. Puede cobrar los pagos
                                        en efectivo en el mostrador, contra reembolso, enlaces de pago, códigos QR,
                                        totalmente a su elección. ¡Asegúrate de ingresar estas instrucciones mientras
                                        configuras tu tienda kulko.app!
                                    </p>
                </div>
                <div className="col-md-6 mt-5">
                    <h5 className="text-center">¿Cómo creo un QR para mi tienda?</h5>
                    <br/>
                    <p className="mb-5 text-center">El enlace de su tienda, es decir, https://kulko.app/tutienda, se
                        puede utilizar para insertar en un código QR utilizando servicios como
                        https://www.qrcode-monkey.com/
                    </p>
                    <h5 className="text-center">¿Por qué debería usar Kulko.App?</h5>
                    <br/>
                    <p className="mb-5 text-center">Consiga que sus clientes actuales vean todo en su micro
                        catálogo y ayúdelos a realizar un pedido con usted mediante un simple enlace de tienda
                        electrónica.</p>
                    <h5 className="text-center">¿Tiene un panel de gestión de inventario?</h5>
                    <br/>
                    <p className="mb-5 text-center">Aún no, aunque está en nuestra hoja de ruta. Por ahora,
                        simplemente puede desactivar los artículos sin stock y volver a activarlos una vez
                        que estén disponibles, simple.
                    </p>
                    <h5 className="text-center">¿Por qué su servicio es tan barato?</h5>
                    <br/>
                    <p className="mb-5 text-center">Somos audaces como usted, y queremos asegurarnos de
                        que aproveche al máximo su viaje al comercio electrónico.
                    </p>
                </div>
            </div>
        </div>




        <footer id="footer" className="footer-area pt-120">
            <div className="container">
                <div className="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="subscribe-content mt-45">
                                <h2 className="subscribe-title">¡Subscribete a nuestras ofertas!</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-form mt-50">
                                <form action="#">
                                    <input type="text" placeholder="Correo electrónico"/>
                                    <button className="main-btn">SUBSCRIBETE</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-widget pb-100">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <a className="logo" href="#">
                                    <img src="assets/images/White.png" alt="logo"/>
                                </a>
                                <p className="text">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                                <ul className="social">
                                    <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                    <li><a href="#"><i className="lni lni-instagram-filled"></i></a></li>
                                    <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-7">
                            <div className="footer-link d-flex mt-50 justify-content-md-between">
                                <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <div className="footer-title">
                                        <h4 className="title">Quick Link</h4>
                                    </div>
                                    <ul className="link">
                                        <li><a href="#">Road Map</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Pricing</a></li>
                                    </ul>
                                </div>

                                <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div className="footer-title">
                                        <h4 className="title">Resources</h4>
                                    </div>
                                    <ul className="link">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-5">
                            <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s"
                                 data-wow-delay="0.8s">
                                <div className="footer-title">
                                    <h4 className="title">Contact Us</h4>
                                </div>
                                <ul className="contact">
                                    <li>+809272561823</li>
                                    <li>info@gmail.com</li>
                                    <li>www.yourweb.com</li>
                                    <li>123 Stree New York City , United <br/> States Of America 750.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="particles-2"></div>
        </footer>
        <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-"></div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default withRouter(LandingPage)