import Header from './components/header.jsx';
import Entry from './components/entry.jsx';
import data from './data.js';

export default function App() {
    let travelEntries = data.map(entry => {
        return <Entry key={entry.id} {...entry}/>
    })
    return (
        <>
            <Header />
            <main>
                {travelEntries}
            </main>
        </>
    )


    // const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    // return (
    //     <main>
    //         {ninjaTurtles.map((n) => <h2>{n}</h2>)}
    //     </main>
    // )
}