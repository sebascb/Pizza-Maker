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
    this._drawPizza();
  }
  
  start() {
    window.requestAnimationFrame(this._update.bind(this));
    this.chef.moveleft
  }


}


class Render2D {
  constructor(document, width, height, background) {
      this._canvas = document.getElementById('#pizza');
      this._canvas.width = width;
      this._canvas.height = height;
      this._canvas.style.background = background.url('');
      this._ctx = this._canvas.getContext('2d');
  }

  /*_start() {
    this._assignControlsToKeys();
    this.chef.move();
    window.requestAnimationFrame(this._update.bind(this));
  }*/

}  




      

    
