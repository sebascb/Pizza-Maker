class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.cb = callback;
    this.chef = options.chef;
  }

  _chef(life, score){

  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.chef.goLeft();
          break;
        case 'ArrowRight':
          this.chef.goRight();
          break;
        default:
          break;
      }
    });
  }

  _start() {
  }

  _update() {
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