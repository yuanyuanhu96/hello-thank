class Rainbow {
  image;
  x;
  y;

  speedX;
  speedY;
  visibility = false;

  constructor(theX, theY, speedX, speedY) {
    console.log('obama!');
    console.log(theX, theY);
    this.x = theX;
    this.y = theY;

    if (speedX !== undefined) {
      this.speedX = speedX;
    }

    if (speedY !== undefined) {
      this.speedY = speedY;
    }

    this.loadImages();
  }

  loadImages() {
    this.image = new Image();
    this.image.onload = () => {
      this.draw();
    };

    this.image.src = './assets/img/rainbow.jpg';
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(this.image, this.x, this.y, 1468, 980);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  show() {
    this.visibility = true;
  }


  tick() {
    this.move();
    if (this.visibility == true) {
      this.draw();
    }
  }
}
