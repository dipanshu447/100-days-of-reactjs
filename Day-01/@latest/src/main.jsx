import { createRoot } from 'react-dom/client'
import './index.css'

function MainContent(props) {
    return (
        <main>
            <h1>Day 1 Log</h1>
            <ul>
                <li>learned what's a difference between js framework and js library</li>
                <li>understood how react is working with html</li>
                <li>learned what is jsx and why its used</li>
                <li>getting familar with react ecosystem</li>
            </ul>
            {props.children}
        </main>
    )
}

createRoot(document.getElementById('root')).render(
    <MainContent>
        <h1>Hello react</h1>
    </MainContent>
)
