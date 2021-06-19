/* by rikanutyy */
document.getElementById('card').onclick = function() {
  document.getElementById('card').classList.toggle('card-open');
};
document.getElementById('body').onclick = function() {
  document.getElementById('card').classList.remove('card-open');
};