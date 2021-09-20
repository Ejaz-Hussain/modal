'use strict';

const openModal = document.querySelectorAll('.button-show-modal');
const btnCloseModal = document.querySelector('.close-modal-button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

overlay.addEventListener('click', function () {
  if (!modal.classList.contains('hidden')) {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }
});
