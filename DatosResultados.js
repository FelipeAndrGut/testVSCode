import React from "react";
import Pokemon from "./Pokemon";
import PaginacionResultados from "./PaginacionResultados";

const DatosResultados = (props) => {
    const {pokemons, page, setPage, totalPages, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage (nextPage);
    }
    
    const nextPage = () => {
        const nextPage = Math.min(page + 1, totalPages);
        setPage (nextPage);
    }

    return (
        <div>
            <div className = "resultData-header">
                <h1>
                    Pokemon
                </h1>
                <PaginacionResultados 
                    page = {page + 1}
                    totalPages = {totalPages}
                    onBackClick = {lastPage}
                    onForwardClick = {nextPage}
                />
            </div>
            { loading ?
                <div>
                    Cargando...
                </div>    
            :
                <div className = "resultData-body">
                    {pokemons.map((pokemon, i) => {
                        return (
                            <Pokemon pokemon = {pokemon} key = {pokemon.name} />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DatosResultados;