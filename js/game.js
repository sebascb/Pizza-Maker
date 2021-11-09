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

  _drawChef() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.chef.position.x, this.chef.position.y, 50, 50);
  }

  _drawPizza() {
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(this.pizza.position.x, this.pizza.position.y, 50, 50);
  }

  _update() {
    console.log('render');
    this._clean();
    this._drawChef(); 
    this._drawPizza();
    window.requestAnimationFrame(this._update.bind(this));
  }

  _assignControlToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowRight':
          this.chef.goRight();
          break;
        case 'ArrowLeft':
          this.chef.goLeft();
          break;
      }
    });
  }
  
  start() {
    this._assignControlToKeys();
    window.requestAnimationFrame(this._update.bind(this));
  }

}



 




      

    
