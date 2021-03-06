export const getData_pokemon_specific = async (pokemon) => {
    try
    {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (err)
    {
        console.log(err)
    }
}

export const getData_pokemon_specific_byURL = async (url) => {
    try
    {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (err)
    {
        console.log(err)
    }
}

export const getData_pokemon_all = async (limit = 20, offset = 0) => {
    try
    {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (err)
    {
        console.log(err)
    }
}