import './style.css'

function CardGame(icon = 'alura-pixel-1', alt = 'Logo da Alura') {
    return `
        <article class="card-game">
            <img src="src/images/${icon}.png" alt="${alt}"> </img>
        </article>
    `   
};

export default CardGame;