import CardGame from '../CardGame'
import './style.css'
function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('logo-javascript-2', 'Logo JavaScript')}
        </article>
    `;
}

export default CardFrontBack;