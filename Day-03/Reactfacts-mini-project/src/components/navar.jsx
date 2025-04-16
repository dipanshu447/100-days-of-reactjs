import ReactLogo from '../assets/react.svg';

export default function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <img src={ReactLogo} alt="react-logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}