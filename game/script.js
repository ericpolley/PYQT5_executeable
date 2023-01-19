

const startButton = document.getElementById('startGame');
const gameA = document.getElementById('gameA');
const gameMenu = document.getElementById('menuGame');
startButton.addEventListener("click", gameStart);

function hideAll() {
    console.log('hideall!')
    gameMenu.classList.add('hidden');
    gameA.classList.add('hidden');
}

function showAll() {
    console.log('hideall!')
    gameMenu.classList.remove('hidden');
    gameA.classList.remove('hidden');
}

function gameStart() {
    console.log('start game!')
    hideAll();
    gameA.classList.remove('hidden');
    gameA.classList.remove('hidden');
}