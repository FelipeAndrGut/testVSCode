import React from 'react';

const Pokemon = (props) => {
    const pokemon = props.pokemon;

    return (
        <div className = "pokemon-miniCard">
            <div className = "pokemon-miniCard-miniImg">
                <img 
                    src = {pokemon.sprites.front_default} 
                    alt = {pokemon.name}
                />
            </div>
            <div className = "pokemon-miniCard-data">
                <div className = "pokemon-miniCard-dataID">
                    <h2>
                        {pokemon.name}
                    </h2>
                    <div>
                        # de Pokedex: {pokemon.id}
                    </div>
                </div>
                <div className = "pokemon-miniCard-dataBody"> 
                    <div>    
                        <h3>
                            Tipos:
                        </h3>
                        <div className = "pokemon-miniCard-dataBody-types">
                            {pokemon.types.map((type, i) => {
                                return (
                                    <div className = "pokemon-miniCard-dataBody-types-text"
                                        key = {i}
                                    >
                                        {type.type.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>    
                    <div>
                        <h3>
                            Habilidades:
                        </h3>
                        <div className = "pokemon-miniCard-dataBody-abilities">
                            {pokemon.abilities.map((ability, j) => {
                                return (
                                    <div className = "pokemon-miniCard-dataBody-abilities-text"
                                        key = {j}
                                    >
                                        {ability.ability.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>    
                </div>
            </div>    
        </div>
    );
};

export default Pokemon;