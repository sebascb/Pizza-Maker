window.addEventListener('load', () => {
    console.log('load');
    const playButton = document.querySelector('#play')
    playButton.addEventListener('click', function(){
        const introScreen = document.querySelector('#intro');
        introScreen.classList.add('hidden')
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.remove('hidden')
    })

    const startButton = document.querySelector('#start')
    startButton.addEventListener('click', function(){
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.add('hidden')
        const winScreen = document.querySelector('#win-button');
        winScreen.classList.remove('hidden')
        const gameOverScreen = document.querySelector('#gameOver-button');
        gameOverScreen.classList.remove('hidden')

    })

  
});
