class Pizza {
    constructor(direction, life) {
      this.direction = direction;
      this.life = life;
    }
    
  
    _receiveDamage(damage){
      this.life = this.life - damage
    }
  
    _move() {
      this.intervalId = setInterval(this._moveForward.bind(this), 100);
    }
  
}