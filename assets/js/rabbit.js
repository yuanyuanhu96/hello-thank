console.log('rabbit!');

class Obama {
  image;
  x;
  y;

  //   speed = {
  //     x: 1,
  //     y: 4
  //   };

  speedX = 1;
  speedY = 3;

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

    this.image.src = './assets/img/obama.png';
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(this.image, this.x, this.y, 140, 210);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  tick() {
    this.move();
    this.draw();
  }
}
