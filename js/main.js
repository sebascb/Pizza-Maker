window.addEventListener('load', () => {
    console.log('load');
    const playButton = document.querySelector('#play')
    playButton.addEventListener('click', function(){
        const introScreen = document.querySelector('#intro');
        introScreen.classList.add('hidden')
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.remove('hidden')


    })

    const winButton = document.querySelector('#win-button')
    winButton.addEventListener('click', function(){
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.add('hidden')
        const winScreen = document.querySelector('#win');
        winScreen.classList.remove('hidden')
        
    })

    const gameOverButton = document.querySelector('#gameOver-button')
    gameOverButton.addEventListener('click', function(){
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.add('hidden')
        const gameoverScreen = document.querySelector('#gameover');
        gameoverScreen.classList.remove('hidden')
    })



  
});
