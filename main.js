'use strict';

/*
<div class="items">
  <div class="prev"></div>
  <div class="item active">
    <img src="img/01.jpg" alt="img01" />
  </div>
  <div class="item">
    <img src="img/02.jpg" alt="img02" />
  </div>
  <div class="item">
    <img src="img/03.jpg" alt="img03" />
  </div>
  <div class="item">
    <img src="img/04.jpg" alt="img04" />
  </div>
  <div class="item">
    <img src="img/05.jpg" alt="img05" />
  </div>
  <div class="next"></div>
</div>;
*/

const imag = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let currentItem = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

for (let i = 0; i < imag.length; i++) {
  const item = document.createElement('div');
  item.classList.add('item');

  if (i === currentItem) {
    item.classList.add('active');
  }

  const img = document.createElement('img');
  img.src = `img/${imag[i]}`;
  img.alt = `img${i}`;

  item.append(img);
  items.append(item);
}

const listItem = document.querySelectorAll('.item');

prev.addEventListener('click', function () {
  console.log('clicco su foto precedente');

  if (currentItem > 0) {
    listItem[currentItem].classList.remove('active');
    currentItem--;
    listItem[currentItem].classList.add('active');
  }
});

next.addEventListener('click', function () {
  console.log('clicco su foto successiva');

  if (currentItem < listItem.length - 1) {
    listItem[currentItem].classList.remove('active');
    currentItem++;
    listItem[currentItem].classList.add('active');
  }
});
