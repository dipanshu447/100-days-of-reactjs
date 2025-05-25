export default function Dice({ value, isHeld, onHold }) {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    return (
        <button style={styles}
            className="dice"
            onClick={onHold}
            aria-label={`Dice with a value ${value}, ${isHeld ? "Held" : "Not Held" }`}
            aria-pressed={isHeld}
        >
            {value}
        </button>
    )
}