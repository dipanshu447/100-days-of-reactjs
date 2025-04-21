export default function Header() {
    return (
        <header>
            <div className="searchBar">
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="search-icon" />
                <input type="text" placeholder="Search users" />
            </div>
            <nav>
                <ul>
                    <li>Reputation</li>
                    <li>New users</li>
                    <li>Voters</li>
                    <li>Editors</li>
                    <li>Moderators</li>
                </ul>
            </nav>
        </header>
    )
}