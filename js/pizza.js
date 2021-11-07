class Pizza {
    constructor(positionX = 0, positionY = 0) {
      this.position = {x: 10, y: 10};
      this.positionX = positionX;
      this.positionY = positionY;
      this.direction = 0;
    }

    _drawPizza() {
      this.ctx.fillStyle = 'brown';
      this._ctx.fillRect(this.Pizza.positionX, this.Pizza.positionY, 10, 10);
    }
    
  
}