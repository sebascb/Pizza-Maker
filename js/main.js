document.addEventListener('DOMContentLoaded', () => {
    let game;

    function printGameOver() {
        let gameOver = document.getElementById('gameover');
        let canvas = document.querySelector('#pizza');
        canvas.style = 'display: none';
        gameOver.style = 'display: block';
    }

    function generateSplashScreen() {
        const intro = document.getElementById('intro');
        intro.innerHTML = `
        <div>
          <button id ="play">Play</button>
        </div>
        `;

        const playButton = document.querySelector('#play');
        playButton.addEventListener('click', () => {
            intro.classList.add('hidden');
            const game = document.getElementById('game');
            game.classList.remove('hidden');
            game.classList.add('show');
        
    

            const startButton = game.querySelector('#start');
            startButton.addEventListener('click', () => {
               let canvas = game.querySelector('#pizza');
               const ctx = canvas.getContext('2d');
               const pizzaMaker = new Game(
                 {
                   ctx: ctx,
                  },
                 printGameOver
                );
                pizzaGame.start();
            });
              
        });
    }
    generateSplashScreen();
   
});