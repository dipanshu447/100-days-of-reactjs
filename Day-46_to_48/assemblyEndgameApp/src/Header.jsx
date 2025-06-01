import clsx from "clsx";

export default function Header({ gameWon, gameOver, gamelost, farwell}) {
    const popOff = clsx("mt-8 px-5 py-2.5 h-20 rounded-md flex flex-col justify-center items-center font-medium text-xl max-w-md min-w-xs sm:w-md", {
        "border border-dashed border-[#323232] bg-[#7A5EA7]" : !gameOver && farwell.lost,
        "bg-[#BA2A2A]": gamelost,
        "bg-[#10A95B]": gameWon 
    });
    

    function renderMessage() {
        if(!gameOver && farwell.lost){
            return (
                <span>{farwell.message()}</span>
            )
        }

        if (gameWon) {
            return (
                <>
                    <span>You Win!</span>
                    <span>Well done! 🎉</span>
                </>
            )
        }
        if(gamelost) {
            return (
                <>
                    <span>Game over!</span>
                    <span>You lose! Better start learning Assembly 😭</span>
                </>
            )  
        }
    }
    
    return (
        <header className="flex flex-col items-center text-center w-xs sm:w-md min-h-52">
            <h1 className="text-2xl text-[#F9F4DA] mb-2">Assembly: Endgame</h1>
            <p className="text-xl text-[#8E8E8E]">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            <section aria-live="polite" role="status" className={popOff}>
                {renderMessage()}
            </section>
        </header>
    )
}