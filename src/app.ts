const processClick = (e: Event) => {
    if((e.target as HTMLElement).nodeName === 'IMG' && (e.target as HTMLElement).id === 'open') {
        document.querySelector('#menuDiv')!.classList.toggle('hide');
        document.querySelector('#menuDiv')!.classList.toggle('show');
        (e.target as HTMLElement).classList.toggle('hide');
        document.querySelector('#close')!.classList.toggle('hide');
    }else if((e.target as HTMLElement).nodeName === 'IMG' && (e.target as HTMLElement).id === 'close') {
        document.querySelector('#menuDiv')!.classList.toggle('show');
        document.querySelector('#menuDiv')!.classList.toggle('hide');
        (e.target as HTMLElement).classList.toggle('hide');
        document.querySelector('#open')!.classList.toggle('hide');
    }else if((e.target as HTMLElement).nodeName === 'LI' && (e.target as HTMLElement).classList.contains('listItem')) {
        (e.target as HTMLElement).classList.toggle('clicked');
        (e.target as HTMLElement).querySelectorAll('.arrow')!.forEach((arrow) => { arrow.classList.toggle('flip'); });
        (e.target as HTMLElement).querySelector('.dropDown')!.classList.toggle('hide');
    }
};

const init = () => {
    document.addEventListener('click', processClick);
};

document.addEventListener('DOMContentLoaded', init);