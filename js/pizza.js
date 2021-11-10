class Pizza {
    constructor(positionX = 0, positionY = 40, speed = 50) {
      this.position = {x: positionX, y: positionY};
      this.speed = speed;
      this.goRightMove();
    
    }

    goLeft(){
      this.position.x = this.position.x - this.speed;
    }
  
    goRight(){   
      this.position.x = this.position.x + this.speed;
    }

    goRightMove() {
      setInterval(() => {
        this.goRight();
      }, 9000); 
    }
 
}