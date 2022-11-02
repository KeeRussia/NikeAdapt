


document.addEventListener('DOMContentLoaded', () => {

  const mediaFiles = document.querySelectorAll('iframe');
  let i = 0;
  
  Array.from(mediaFiles).forEach((file, index) => {
    file.onload = () => {
      i++

      percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

      if(i === mediaFiles.length) {
        preloader.classList.add('preloader--hide')
        percents.innerHTML = 100
      }
    }
  })
})








//Color selection


const color_btns = document.querySelectorAll('.color');

color_btns.forEach(color => {
  color.addEventListener('click', () => {
    let colorNameClass = color.className;
    if(!color.classList.contains('active')){
      let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
      resetActiveBtns();
      color.classList.add('active');
      setNewColor(colorName)
    }
  })
})

//resetting all colors btns

function resetActiveBtns() {
  color_btns.forEach(color => {
    color.classList.remove('active');
  });
}

//set new picture due to the color chosen

function setNewColor(color) {
  document.querySelector('.adapt-img img').src = `img/Nike_${color}.png`;
}



//burger-menu 
let burgerButton = document.querySelector('.burger-button');
let burgerMenu = document.querySelector('.burger-menu');
let pageMain = document.querySelector('.page-main');
let line = document.querySelector('.line')

burgerButton.addEventListener('click', mobileMenu);

function mobileMenu() {
  burgerMenu.classList.toggle('active-menu');
  burgerButton.classList.toggle('active');
  line.classList.toggle('active');
  pageMain.classList.toggle('page-shadow');
}

const navLink = document.querySelectorAll('.navigation-list__item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  burgerMenu.classList.remove('active-menu');
  burgerButton.classList.remove('active');
  pageMain.classList.remove('page-shadow');
}


//View more
let moreButton = document.querySelector('.viewMore');
let hidden = document.querySelector('.hidden');

moreButton.addEventListener('click', showText);

function showText() {
  hidden.classList.toggle('shown');
  moreButton.classList.toggle('display-none');
}



/*
//Preloader
window.onload = function() {
  let preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
};*/