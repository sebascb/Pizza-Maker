class Chef {
  constructor(positionX = 400, positionY = 550) {
    this.position = {x: positionX, y: positionY};
  }


  

  goLeft(){
    
    this.position.x = this.position.x - 1;
    
  }

  goRight(){
    
    this.position.x = this.position.x + 1;
    
  }


 /*_receiveDamage(damage) {
    this.life = this.life - damage
  }*/


  
}