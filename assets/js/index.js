const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');
// draw rabbit
const obama = new Obama(10, 10, 5, 1);
const tick = () => {
  console.log('Tick');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  obama.tick();

  window.requestAnimationFrame(tick);
};

tick();

console.log(12);
