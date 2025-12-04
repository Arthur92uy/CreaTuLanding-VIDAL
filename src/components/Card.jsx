import React from "react";
import { ItemCount } from "./ItemCount";
import AlmendrasTost from "../assets/almendras-tostadas.jpg";

export const Card = () => {
    return (
        <div className="item__card">
            <div className="card__container-img">
                <img src={AlmendrasTost} alt="Almendras Tostadas"></img>
            </div>
            <div className="item__container-info">
                <section className="item__nombre-precio">
                    <h3 className="item__nombre">Almendras sin sal</h3>
                    <div className="item__precio">
                        <span>Precio por 1Kg</span>
                        <span className="precio">$$$</span>
                    </div>
                </section>
                <section className="item__selector">
                    <span>Cantidad</span>
                    <ItemCount />
                </section>
            </div>
        </div>
    );
};
