const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');
// draw rabbit
const building = new Building(0, 0, 0, 0);
const rain = new Rain(0, -10285, 0, 10);
const cloud = new Cloud(0, 80, 1, 0);
const front = new Front(0, 0, 0, 0);

const tick = () => {
  console.log('Tick');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  building.tick();
  rain.tick();
  cloud.tick();
  front.tick();

  window.requestAnimationFrame(tick);
};

tick();

console.log(12);
