const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemonList() {
    const response = await fetch(`${BASE_URL}pokemon?limit=40`);
    return response.json();
}

async function getPokemonDetails(id) {
    const response = await fetch(`${BASE_URL}pokemon/${id}`);
    return response.json();
}

export async function getPokemonCardInfo(id) {
    const pokemon = await getPokemonDetails(id);

    return {
        name: pokemon.name,
        species1: pokemon.types[0]?.type.name,
        species2: pokemon.types[1]?.type.name ?? '|',
        img: pokemon.sprites.other.home.front_default
    };
}