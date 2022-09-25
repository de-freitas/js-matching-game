import './style.css';


function ArrowDown(currentPlayer=1) {
    return /*html*/`
        <img class="arrow-down"
             data-currentPlayer="${currentPlayer}"
             src="src/images/IconArrowDown.png" 
             alt="Ícone seta para baixo">
    `;
};

export default ArrowDown