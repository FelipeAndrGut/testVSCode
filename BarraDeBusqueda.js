import React from "react";
import {getData_pokemon_specific} from "./API"
import Pokemon from "./Pokemon";

const {useState} = React;

const BarraDeBusqueda = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0)
        {
            onSearch(null);
        }
    }

    const onClick = async () => {
        onSearch(search);
    }

    return (
        <div className = "searchBar-body">
            <div className = "searchBar"> 
                <input
                    text = "Buscar pokemon por nombre o id" 
                    onChange = {onChange}
                /> 
            </div>
            <div className = "searchBar-button">
                <button
                    onClick = {onClick}
                >
                    Buscar
                </button>
            </div>

        </div>    
    );
;}

export default BarraDeBusqueda