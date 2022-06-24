'use strict';
const processClick = (e) => {
  if (e.target.nodeName === 'IMG' && e.target.id === 'open') {
    document.querySelector('#menuDiv').classList.toggle('hide');
    document.querySelector('#menuDiv').classList.toggle('show');
    e.target.classList.toggle('hide');
    document.querySelector('#close').classList.toggle('hide');
  } else if (e.target.nodeName === 'IMG' && e.target.id === 'close') {
    document.querySelector('#menuDiv').classList.toggle('show');
    document.querySelector('#menuDiv').classList.toggle('hide');
    e.target.classList.toggle('hide');
    document.querySelector('#open').classList.toggle('hide');
  } else if (
    e.target.nodeName === 'LI' &&
    e.target.classList.contains('listItem')
  ) {
    document.querySelectorAll('.listItem').forEach((item) => {
      if (item.classList.contains('clicked') && item !== e.target) {
        item.querySelectorAll('.arrow').forEach((arrow) => {
          arrow.classList.toggle('flip');
        });
        item.querySelector('.dropDown').classList.toggle('hide');
        item.classList.toggle('clicked');
      }
    });
    e.target.classList.toggle('clicked');
    e.target.querySelectorAll('.arrow').forEach((arrow) => {
      arrow.classList.toggle('flip');
    });
    e.target.querySelector('.dropDown').classList.toggle('hide');
  } else {
    document.querySelectorAll('.dropDown').forEach((item) => {
      if (!item.classList.contains('hide')) {
        document.querySelectorAll('.listItem').forEach((listItem) => {
          if (listItem.classList.contains('clicked')) {
            listItem.querySelectorAll('.arrow').forEach((arrow) => {
              arrow.classList.toggle('flip');
            });
            listItem.classList.toggle('clicked');
          }
        });
        item.classList.toggle('hide');
      }
    });
  }
};
const init = () => {
  document.addEventListener('click', processClick);
};
document.addEventListener('DOMContentLoaded', init);
