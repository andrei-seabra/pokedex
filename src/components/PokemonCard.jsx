export default function PokemonCard({ name, species1, species2, img }) {
    return (
        <div className='pokemon-card'>
            <div className='pokemon-info'>
                <p className='pokemon-name'>{name}</p>
                <ul className='species-list'>
                    <li className={`species ${species1}`}>{species1}</li>
                    <li className={`species ${species2}`}>{species2}</li>
                </ul>
            </div>
            <img className='pokemon-img' src={img} alt='Bulbasaur' />
        </div>
    )
}