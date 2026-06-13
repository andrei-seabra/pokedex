const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemonList() {
    const response = await fetch(`${BASE_URL}pokemon?limit=151`);
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
        types1: pokemon.types[0]?.type.name,
        types2: pokemon.types[1]?.type.name ?? '|',
        img: pokemon.sprites.other.home.front_default
    };
}

async function getPokemonSpecies(id) {
    const response = await fetch(`${BASE_URL}pokemon-species/${id}`);
    return response.json();
}

export async function getPokemonDetailsInfo(id) {
    const pokemon = await getPokemonDetails(id);
    const pokemon_species = await getPokemonSpecies(id);

    const abilities = pokemon.abilities
        .map(ability => ability.ability.name)
        .join(', ');

    const eggGroups = pokemon_species.egg_groups
        .map(group => group.name)
        .join(', ');

    const hp = pokemon.stats[0].base_stat;
    const attack = pokemon.stats[1].base_stat;
    const defense = pokemon.stats[2].base_stat;
    const spAtk = pokemon.stats[3].base_stat;
    const spDef = pokemon.stats[4].base_stat;
    const speed = pokemon.stats[5].base_stat;

    const total = hp + attack + defense + spAtk + spDef + speed;
    
    return {
        name: pokemon.name,
        types1: pokemon.types[0]?.type.name,
        types2: pokemon.types[1]?.type.name ?? 'hidden',
        img: pokemon.sprites.other.home.front_default,
        id: `#${pokemon.id.toString().padStart(3, '0')}`,
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        abilities,
        eggGroups,
        hp,
        attack,
        defense,
        spAtk,
        spDef,
        speed,
        total
    };
}