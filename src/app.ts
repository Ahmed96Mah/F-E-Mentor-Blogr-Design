const processClick = (e: Event) => {
  if (
    (e.target as HTMLElement).nodeName === 'IMG' &&
    (e.target as HTMLElement).id === 'open'
  ) {
    document.querySelector('#menuDiv')!.classList.toggle('hide');
    document.querySelector('#menuDiv')!.classList.toggle('show');
    (e.target as HTMLElement).classList.toggle('hide');
    document.querySelector('#close')!.classList.toggle('hide');
  } else if (
    (e.target as HTMLElement).nodeName === 'IMG' &&
    (e.target as HTMLElement).id === 'close'
  ) {
    document.querySelector('#menuDiv')!.classList.toggle('show');
    document.querySelector('#menuDiv')!.classList.toggle('hide');
    (e.target as HTMLElement).classList.toggle('hide');
    document.querySelector('#open')!.classList.toggle('hide');
  } else if (
    (e.target as HTMLElement).nodeName === 'LI' &&
    (e.target as HTMLElement).classList.contains('listItem')
  ) {
    document.querySelectorAll('.listItem')!.forEach((item) => {
      if (
        item.classList.contains('clicked') &&
        item !== (e.target as HTMLElement)
      ) {
        item.querySelectorAll('.arrow')!.forEach((arrow) => {
          arrow.classList.toggle('flip');
        });
        item.querySelector('.dropDown')!.classList.toggle('hide');
        item.classList.toggle('clicked');
      }
    });
    (e.target as HTMLElement).classList.toggle('clicked');
    (e.target as HTMLElement).querySelectorAll('.arrow')!.forEach((arrow) => {
      arrow.classList.toggle('flip');
    });
    (e.target as HTMLElement)
      .querySelector('.dropDown')!
      .classList.toggle('hide');
  } else {
    document.querySelectorAll('.dropDown')!.forEach((item) => {
      if (!item.classList.contains('hide')) {
        document.querySelectorAll('.listItem')!.forEach((listItem) => {
          if (listItem.classList.contains('clicked')) {
            listItem.querySelectorAll('.arrow')!.forEach((arrow) => {
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
