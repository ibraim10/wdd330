//import
import * as pokemon from "./pokeApi.js"
//tic-tac-toe
window.addEventListener('DOMContentLoaded', () => {
    const options = Array.from(document.querySelectorAll('.option'));
    const playerDisplay = document.querySelector('.player');
    const playAgainBtn = document.querySelector('#play_again');
    const gameStatus = document.querySelector('.gameStatus');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const player1 = 'player1';
    const player2 = 'player2';
    const tie = 'tie';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? player1 : player2);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(tie);
    }

    const announce = (type) => {
        switch(type){
            case player2:
                gameStatus.innerHTML = 'Player <span class="playerO">O</span> Won!!';
                break;
            case player1:
                gameStatus.innerHTML = 'Player <span class="playerX">X</span> Won!!';
                break;
            case tie:
                gameStatus.innerText = 'Tie';
        }
        gameStatus.classList.remove('hide');
    };

    const isValidAction = (option) => {
        if (option.innerText === 'X' || option.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (option, index) => {
        if(isValidAction(option) && isGameActive) {
            option.innerText = currentPlayer;
            option.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        gameStatus.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        options.forEach(option => {
            option.innerText = '';
            option.classList.remove('playerX');
            option.classList.remove('playerO');
        });
    }

    options.forEach( (option, index) => {
        option.addEventListener('click', () => userAction(option, index));
    });

    playAgainBtn.addEventListener('click', resetBoard);
});
