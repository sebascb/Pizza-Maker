window.addEventListener('load', () => {
    console.log('load');
    const playButton = document.querySelector('#play')
    playButton.addEventListener('click', function(){
        const introScreen = document.querySelector('#intro');
        introScreen.classList.add('hidden')
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.remove('hidden')
    })

  
});