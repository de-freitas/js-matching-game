import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';


function BoardGame() {
    const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach( (card) => card.classList.remove('-active'));
    };

    const swapPlayer = ($arrowDown) => {
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
        $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
    };
    
    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $arrowDown = document.querySelector('.arrow-down');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
        if ($cardsActive.length == 2) {
            setTimeout( () => {
                flipAndHideCards($cardsActive);
                swapPlayer($arrowDown);
            }, 500);
        }
    }

    //const $htmlCardFrontBack = CardFrontBack(cards[0].icon, cards[0].altIcon);
    const $htmlCardsList = cards.map( (card) => CardFrontBack(card.icon, card.altIcon) );
    const $htmlCards = $htmlCardsList.join('');

    return /*html*/`
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
    `;
}

export default BoardGame;