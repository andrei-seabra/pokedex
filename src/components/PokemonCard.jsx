export default function PokemonCard({ name, types1, types2, img }) {
    return (
        <div className='pokemon-card'>
            <div className='pokemon-info'>
                <p className='pokemon-name'>{name}</p>
                <ul className='types-list'>
                    <li className={`types ${types1}`}>{types1}</li>
                    <li className={`types ${types2}`}>{types2}</li>
                </ul>
            </div>
            <img className='pokemon-img' src={img} alt='Bulbasaur' />
        </div>
    )
}