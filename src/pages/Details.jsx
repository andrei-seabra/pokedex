import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import StatBar from '../components/StatBar'

import LoadingSpinner from '../assets/loading.svg'
import ExitIcon from '../assets/exit.svg'

import { getPokemonDetailsInfo } from '../services/api';

export function Details() {
    const [activeTab, setActiveTab] = useState('about');
    const [pokemon, setPokemon] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        async function loadPokemonDetails() {
            const data = await getPokemonDetailsInfo(id);
            setPokemon(data);
        }

        loadPokemonDetails();
    }, [id]);

    if (!pokemon) {
        return (
            <>
            <Header />
                <div className='home-loading'>
                    <img className='loading-spinner' src={LoadingSpinner} />
                    <h1 className='loading-title'>Carregando...</h1>
                </div>
            <Footer />
            </>
        );
    }
    
    return (
        <>
        <Header />
        <div className='details-content'>
            <Link to='/'>
                <img className='exit-button' src={ExitIcon} />
            </Link>
            <div className='pokemon-title'>
                <h1 className='details-pokemon-name'>{pokemon.name}</h1>
                <p className='pokemon-id'>{pokemon.id}</p>
            </div>
            <div className='details-types-list'>
                <p className={`details-types ${pokemon.types1}`}>{pokemon.types1}</p>
                <p className={`details-types ${pokemon.types2}`}>{pokemon.types2}</p>
            </div>
            <img className='details-pokemon-img' src={pokemon.img} />
            <main className='details-container'>
                <div className='options-list'>
                    <p className={`option ${activeTab === 'about' ? 'active-tab' : ''}`} onClick={() => setActiveTab('about')}>About</p>
                    <p className={`option ${activeTab === 'stats' ? 'active-tab' : ''}`} onClick={() => setActiveTab('stats')}>Base Stats</p>
                </div>
                <div className='details-info'>
                    { activeTab === 'about' && (
                        <>
                        <div className='details-pokemon-info-list'>
                            <p className='details-pokemon-info details-label'>Height</p>
                            <p className='details-pokemon-info'>{pokemon.height} m</p>
                        </div>
                        <div className='details-pokemon-info-list'>
                            <p className='details-pokemon-info details-label'>Weight</p>
                            <p className='details-pokemon-info'>6.9 kg</p>
                        </div>
                        <div className='details-pokemon-info-list'>
                            <p className='details-pokemon-info details-label'>Abilities</p>
                            <p className='details-pokemon-info'>{pokemon.abilities}</p>
                        </div>
                        <h2 className='subheading'>Breeding</h2>
                        <div className='details-pokemon-info-list'>
                            <p className='details-pokemon-info details-label'>Egg Groups</p>
                            <p className='details-pokemon-info'>{pokemon.eggGroups}</p>
                        </div>
                        </>
                    )}
                    { activeTab === 'stats' && (
                        <>
                        <StatBar label="HP" value={pokemon.hp} />
                        <StatBar label="Attack" value={pokemon.attack} />
                        <StatBar label="Defense" value={pokemon.defense} />
                        <StatBar label="Sp. Atk" value={pokemon.spAtk} />
                        <StatBar label="Sp. Def" value={pokemon.spDef} />
                        <StatBar label="Speed" value={pokemon.speed} />
                        <StatBar label="Total" value={pokemon.total} max={720} />
                        </>
                    )}
                </div>
            </main>
        </div>
        <Footer />
        </>
    )
}