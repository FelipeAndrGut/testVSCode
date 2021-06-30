import React from "react";
import BarraDeNavegacion from "./BarraDeNavegacion";
import BarraDeBusqueda from "./BarraDeBusqueda";
import DatosResultados from "./DatosResultados";
import { getData_pokemon_all, getData_pokemon_specific_byURL, getData_pokemon_specific } from "./API";
import './App.css';

const {useState, useEffect} = React;

const App = () => {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [falloBusqueda, setFalloBusqueda] = useState(false);

  const getPokemons = async () => {
    try
    {
      setLoading(true);
      const data = await getData_pokemon_all(10, 10 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getData_pokemon_specific_byURL(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 10));
      setFalloBusqueda(false);
    }
    catch (err)
    {
      console.log(err);
    }
  };

  const onSearch = async (pokemon) => {
    if (!pokemon)
    {
      return getData_pokemon_all();
    }
    setLoading(true);
    const result = await getData_pokemon_specific(pokemon);
    if (!result) 
    {
      setFalloBusqueda(true);
      setLoading(false);
      return;
    }
    else
    {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [page]);

  return (
    <div>
      <BarraDeNavegacion />
      <div className = "App">
        <BarraDeBusqueda 
          onSearch = {onSearch}
        />
        { falloBusqueda ? 
          <div>
            El pokemon solicitado es inexistente.
          </div>
        :
          <DatosResultados 
            pokemons = {pokemons}
            page = {page}
            setPage = {setPage}
            totalPages = {totalPages}
            loading = {loading}
          />
        }
      </div>
    </div>
  );
};

export default App;