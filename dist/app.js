"use strict";
const processClick = (e) => {
    if (e.target.nodeName === 'IMG' && e.target.id === 'open') {
        document.querySelector('#menuDiv').classList.toggle('hide');
        document.querySelector('#menuDiv').classList.toggle('show');
        e.target.classList.toggle('hide');
        document.querySelector('#close').classList.toggle('hide');
    }
    else if (e.target.nodeName === 'IMG' && e.target.id === 'close') {
        document.querySelector('#menuDiv').classList.toggle('show');
        document.querySelector('#menuDiv').classList.toggle('hide');
        e.target.classList.toggle('hide');
        document.querySelector('#open').classList.toggle('hide');
    }
    else if (e.target.nodeName === 'LI' && e.target.classList.contains('listItem')) {
        e.target.classList.toggle('clicked');
        e.target.querySelectorAll('.arrow').forEach((arrow) => { arrow.classList.toggle('flip'); });
        e.target.querySelector('.dropDown').classList.toggle('hide');
    }
};
const init = () => {
    document.addEventListener('click', processClick);
};
document.addEventListener('DOMContentLoaded', init);
