const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');
// draw rabbit
const building = new Building(0, 0, 0, 0);
const rain = new Rain(0, -10285, 0, 0);
const cloud = new Cloud(-400, 80, 1, 0);
const front = new Front(0, 0, 0, 0);
const rainbow = new Rainbow(0, 0, 0, 0);

const statusTouch = document.querySelector('#touch-area');

const tick = () => {
  console.log('Tick');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  building.tick();
  rainbow.tick();

  rain.tick();
  cloud.tick();
  front.tick();
  a = rain.when();
  console.log('a', a);

  if (a >= -1000) {
    rainbow.show();
  }

  window.requestAnimationFrame(tick);
};

tick();

console.log(12);

statusTouch.addEventListener('click', (event) => {
  x = cloud.biteCloud();
  console.log('bite! Status', x);
  rain.biggerRain();
});
