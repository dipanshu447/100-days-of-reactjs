function Star({ isFavorite, clickFuc }) {
    let startIcon = isFavorite ? "https://img.icons8.com/?size=100&id=7856&format=png&color=000000" : "https://img.icons8.com/?size=100&id=104&format=png&color=000000";
    return (
        <button
            onClick={clickFuc}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={startIcon}
                alt={isFavorite ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}