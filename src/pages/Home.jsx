    import { useEffect, useState } from 'react'
    import { Link } from 'react-router-dom'

    import PokemonCard from '../components/PokemonCard'
    import Header from '../components/Header'
    import Footer from '../components/Footer'

    import { getPokemonCardInfo } from '../services/api'
    import { getPokemonList } from '../services/api'

    export function Home() {
        const [pokemons, setPokemons] = useState([]);

        useEffect(() => {
            async function loadPokemons() {
                const pokemonList = await getPokemonList();

                const cards = await Promise.all(
                    pokemonList.results.map((_, index) =>
                        getPokemonCardInfo(index + 1)
                    )
                );

                setPokemons(cards);
            }

            loadPokemons();
        }, []);

        return (
            <>
            <Header />
            <h1 className='title'>
                pokedex<span className='title-point'>.</span>
            </h1>
            <main className='container'>
                {pokemons.map((pokemon, index) => (
                    <Link to={`pokemon/${index+1}`}>
                        <PokemonCard
                            name={pokemon.name}
                            species1={pokemon.species1}
                            species2={pokemon.species2}
                            img={pokemon.img}
                        />
                    </Link>
                ))}
            </main>
            <Footer />
            </>
        )
    }