import React, { useState } from "react";

export const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const sumarItem = () => {
        setContador(contador + 1);
    };

    const restarItem = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <>
            <div className="item__container-contador">
                <span
                    className="material-symbols-outlined button-contador"
                    onClick={restarItem}
                >
                    remove
                </span>
                <span className="item__contador"> {contador} </span>
                <span
                    className="material-symbols-outlined button-contador"
                    onClick={sumarItem}
                >
                    add
                </span>
            </div>
        </>
    );
};
