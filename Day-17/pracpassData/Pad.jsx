function Pad({color, onOff, click, id}) {
    return (
        <button 
            className={onOff ? "on" : undefined} 
            onClick={() => click(id)} 
            style={{backgroundColor:color}}
        ></button>
    )
}