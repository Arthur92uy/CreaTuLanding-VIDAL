import React from "react";

export const Search = () => {
    return (
        <>
            <form action="/buscar" method="get" className="form-search">
                <input id="search" type="search" name="q" placeholder="Buscar..." />
                <button type="submit" className="form__button-search">
                    <span className="material-symbols-outlined">search</span>
                </button>
            </form>
        </>
    );
};
