import ChefLogo from '../assets/Chef-Claude-Icon.png';

export default function Header() {
    return (
        <header>
            <img src={ChefLogo} alt="chef-logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}