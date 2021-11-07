class Chef {
  constructor(positionX = 0, positionY = 0) {
    this.position = {x: 10, y: 10};
    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = 0;
  }

  goUp(){
    {
      this.positionY--;
    }
  }

  goDown(){
    {
      this.positionY++;
    }
  }

  goLeft(){
    {
      this.positionX--;
    }
  }

  goRight(){
    {
      this.positionX++;
    }
  }


  _receiveDamage(damage) {
    this.life = this.life - damage
  }


  _drawChef() {
    this.ctx.fillStyle = 'blue';
    this._ctx.fillRect(this.Chef.positionX, this.Chef.positionY, 10, 10);
  }
}