import React from "react";
import Logo from "../assets/easyMaxRes.png";
import { CartWidget } from "./CartWidget";
import { Search } from "./Search";

export const NavBar = () => {
    return (
        <header className="navbar">
            <div className="navbar__dialog">
                <span className="navbar__dialog-text">
                    Envios sin costo a TODO MONTEVIDEO tus compras desde $1400
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
