import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function Header() {
    return (
        <Link to={'/'}>
            <header className='home-header'>
                <img className='logo' src={logo} alt='Logo' />
            </header>
        </Link>
    )
}