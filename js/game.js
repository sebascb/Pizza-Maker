class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.cb = callback;
  }

  _start() {
  }

  _update() {
  }

}

class Chef {
  constructor(lives, direction) {
    this.lives = lives;
    this.direction = direction;
  }
  
  _goRight() {

  }
  _goLeft(){

  }
  
}
       
class Pizza {
  constructor(direction) {
    this.direction = direction;
  }
  
  _goRight() {
  }

  _goLeft(){
  }

}
    
class Cut {
  constructor(direction) {
    this.direction = direction;
  }

  _goStraight() {   
  }

}