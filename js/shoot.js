class Shoot {
    constructor(positionX = 395, positionY = 550, speed = 80) {
      this.position = {x: positionX, y: positionY};
      this.speed = speed;
    }
    
    goLeft() {

      this.position.x = this.position.x - 1; 
        
    }
    
    goRight() {
    
      this.position.x = this.position.x + 1; 
    
    }  

    attack() {
      this.position.y = this.position.y - this.speed;
    }

    goAttack(){
        setInterval(() => {      
            this.attack();
            if (this.position.y === 0){
              this.position.y = 550;
            }     
        }, 100);  
    }

}