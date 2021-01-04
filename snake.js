function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  this.highScore = 0;


  this.draw = function() {
    ctx.fillStyle = '#FFFFFF';

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i = 0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
  }
  
  this.changeDirection = function(direction){
    switch(direction){
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }
  
  this.eat = function(fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total++;
      return true;
    }
    return false;
  }
  
  this.checkHighScore = function (){
    if (this.total > this.highScore){
      this.highScore = this.total;
      document.querySelector('.highScore').innerText = snake.highScore
    }
  }

  this.checkCollision = function() {
    if (this.x === -1 || this.x === 300 || this.y === -1 || this.y === 300) {
      this.total = 0;
      alert("Game Over! Your score was " + this.tail.length + ". Try again!");
      this.tail = [];
    }
    for (let i=0; i<this.tail.length; i++){
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
        alert("Game Over! Your score was " + this.tail.length + ". Try again!");
      } 
    }
  }
}