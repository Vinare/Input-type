'use strict';
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const eBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const span = document.getElementById('range-span');

const color = function() {
  square.style.backgroundColor = text.value;
};

const dimensions = function(e) {
  circle.style.height = e.target.value + '%';
  circle.style.width = circle.style.height;
  span.textContent = circle.style.height;
};

btn.addEventListener('click', color);
eBtn.style.display = 'none';
range.addEventListener('input', dimensions);
console.dir(circle);





