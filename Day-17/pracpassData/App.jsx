function App() {
    const [Paddata, setPad] = React.useState(padData);

    function togglePad(id) {
        setPad(prev => prev.map(pad => pad.id === id ? {...pad, on: !pad.on} : pad))

        /* My way of doing this... bit lengthy still worked that matters*/
        // setPad(prev => {
        //     let p = prev.find(e => e.id === id);
        //     let newPad = [...prev];
        //     if(p != undefined){
        //         p.on = !p.on;
        //         newPad[id == 0 ? 0 : id-1] = p;
        //     }
        //     return newPad;
        // })
    }

    function toggleOff() {
        setPad(prev => prev.map(pad => ({...pad, on: false})));
    }

    return (
        <main>
            <div className="pad-container">
                {Paddata.map(e => <Pad key={e.id} id={e.id} color={e.color} click={togglePad} onOff={e.on}/>)}
            </div>
            <button onClick={toggleOff} className="turnOff">Turn all switch off</button>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);