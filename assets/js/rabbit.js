class Rain {
  image;
  x;
  y;

  //   speed = {
  //     x: 1,
  //     y: 4
  //   };

  speedX;
  speedY;

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

    this.image.src = './assets/img/rain.png';
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(this.image, this.x, this.y, 980, 10285);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  when() {
    return this.y;
  }

  biggerRain() {
    this.speedY += 4;
  }

  tick() {
    this.move();
    this.draw();
  }
}
