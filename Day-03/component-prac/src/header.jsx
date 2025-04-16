import reactLogo from './assets/react.svg';
export function Header() {
    return (
        <header className='head'>
            <img src={reactLogo} className='image' alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
