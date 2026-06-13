function getStatClass(value) {
    if (value >= 80) {
        return 'good';
    } else if (value >= 50) {
        return 'medium';
    } else {
        return 'bad';
    }
}

export default function StatBar({ label, value, max = 150 }) {
    const percentage = Math.min((value / max) * 100, 100);
    const statClass = getStatClass(value);

    return (
        <div className='details-pokemon-info-list'>
            <p className='details-pokemon-info details-label'>{label}</p>

            <div className='stats-bar'>
                <p className='details-pokemon-info stats'>{value}</p>
                <div className='bar-bg'>
                    <div className={`bar ${statClass}`} style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        </div>
    )
}