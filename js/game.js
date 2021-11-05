class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.chef = options.chef;
    this.rows = options.rows;
    this.columns = options.columns;
    this.cb = callback;
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
        case 'Space':
          this.chef.shoot();
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