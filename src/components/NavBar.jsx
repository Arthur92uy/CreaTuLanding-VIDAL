import React, { useState } from "react";
import Logo from "../assets/easyMaxRes.png";
import { CartWidget } from "./CartWidget";
import { Search } from "./Search";

export const NavBar = () => {
    let mensaje1 =
        "Envios sin costo a TODO MONTEVIDEO tus compras desde $1400";
    let mensaje2 =
        "Envios a TODO URUGUAY por agencia, costo segun kilaje del pedido";

    const [dialogo, setDialogo] = useState(mensaje1);

    const dialogBox = () => {
        if (dialogo === mensaje1) {
            setDialogo(mensaje2);
        } else {
            setDialogo(mensaje1);
        }
    };

    return (
        <header className="navbar">
            <div className="navbar__dialog">
                <span
                    className="material-symbols-outlined material-symbols-outlined--secondary navbar__dialog-text"
                    onClick={dialogBox}
                >
                    arrow_back_ios
                </span>
                <span className="navbar__dialog-text">{dialogo}</span>
                <span
                    className="material-symbols-outlined material-symbols-outlined--secondary navbar__dialog-text"
                    onClick={dialogBox}
                >
                    arrow_forward_ios
                </span>
            </div>
            <div className="navbar__content">
                <h1 className="navbar__logo-container">
                    <img
                        className="navbar__logo"
                        src={Logo}
                        alt="Easy Nutrición"
                    ></img>
                </h1>
                <ul className="navbar__menu">
                    <li className="navbar__menu-item">
                        <a className="navbar__menu-link" href="">
                            Inicio
                        </a>
                    </li>
                    <li className="navbar__menu-item">
                        <a className="navbar__menu-link" href="">
                            Frutos secos
                        </a>
                    </li>
                    <li className="navbar__menu-item">
                        <a className="navbar__menu-link" href="">
                            Frutales
                        </a>
                    </li>
                    <li className="navbar__menu-item">
                        <a className="navbar__menu-link" href="">
                            Harinas
                        </a>
                    </li>
                    <li className="navbar__menu-item">
                        <a className="navbar__menu-link" href="">
                            Semillas
                        </a>
                    </li>
                </ul>
                <div className="navbar__search-user-cartwidget">
                    <div className="navbar__search">
                        <Search />
                    </div>
                    <div className="navbar__user">
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>
                    <div className="navbar__cartwidget">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </header>
    );
};
