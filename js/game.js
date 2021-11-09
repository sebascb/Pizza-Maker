class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.chef = options.chef;
    this.pizza = options.pizza;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  _clean(){
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, 800, 600);
  }

  _update() {
    this._clean();
    this._drawChef();
    window.requestAnimationFrame(this._update.bind(this));
    
    /*this._drawPizza();*/
  }

  _assignControlToKeys() {

    document.addEventListener('Keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.Chef.goUp();
          break;
        case 'ArrowDown':
          this.Chef.goDown();
          break;
        case 'ArrowRight':
          this.Chef.goRight();
          break;
        case 'ArrowLeft':
          this.Chef.goLeft();
          break;
      }
    });
  }
  
  start() {
    window.requestAnimationFrame(this._update.bind(this));
    this._assignControlToKeys();
  }

}



 




      

    
