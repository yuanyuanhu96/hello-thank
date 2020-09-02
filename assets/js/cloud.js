class Cloud {
  image;
  x;
  y;

  speedX;
  speedY;
  cloudStatus = 4;
  cloudSwidth;

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
    this.biteCloud();

    this.loadImages();
  }

  loadImages() {
    this.image = new Image();
    this.image.onload = () => {
      this.draw();
    };

    this.image.src = './assets/img/cloud.png';
  }

  biteCloud() {
    this.cloudSwidth = this.cloudStatus * 400;
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(
      this.image,
      this.cloudSwidth,
      0,
      400,
      301,
      this.x,
      this.y,
      400,
      301
    );
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
