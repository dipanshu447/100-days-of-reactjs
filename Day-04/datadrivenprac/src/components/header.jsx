import UniversalLogo from '../assets/Globe.png';

export default function Header() {
    return (
        <header>
            <img src={UniversalLogo} alt="universalogo" />
            <span>my travel journal.</span>
        </header>
    )
}