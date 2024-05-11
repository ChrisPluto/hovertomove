const div = document.querySelector('.image_blur');
let isIn = false;
div.addEventListener('mouseover', function() {
  isIn = true;
});
div.addEventListener('mouseout', function() {
  isIn = false;
});
div.addEventListener('mousemove', function() {
  if (isIn) {
    div.style.setProperty('--x', event.clientX + 'px');
    div.style.setProperty('--y', event.clientY + 'px');
  }
});

const btn = document.querySelector('.btn');
const imgBlur = document.querySelector('.image_blur');
btn.addEventListener('click', ()=>{
imgBlur.classList.toggle('hidden');
});