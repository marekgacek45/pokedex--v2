export const getAllPokemons = async (limit = 50, offset = 0) => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon';
  
    const res = await fetch(`${baseURL}?limit=${limit}&offset=${offset}`);
    const data = await res.json();
  
    const promises = data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      const detailedData = await res.json();
      return {
        ...detailedData,
        id: detailedData.id, // Zapewniamy unikalne ID
      };
    });
  
    const results = await Promise.all(promises);
  
    return results;
  };
  