import React from "react";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__enlaces-utiles">
                    <span>Enlaces útiles</span>
                    <ul>
                        <li>Politica de devoluciones</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                        <li>ReutilEASY</li>
                    </ul>
                </div>
                <div className="footer__social">
                    <span>Redes sociales</span>
                    <ul>
                        <li>
                            <img
                                className="footer__social-img"
                                src="/002-instagram.png"
                                alt="Instagram"
                            ></img>
                        </li>
                        <li>
                            <img
                                className="footer__social-img"
                                src="/003-facebook.png"
                                alt="Facebook"
                            ></img>
                        </li>
                        <li>
                            <img
                                className="footer__social-img"
                                src="/001-youtube.png"
                                alt="Youtube"
                            ></img>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};
