/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*MENU SHOW*/
/*Validate const toogle */
if(navToogle){
  navToogle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
  })
}

/*MENU HIDDEN */
/*Validate if const navClose exist */
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  })
}

const navLink = document.querySelectorAll('.nav__link')

/*REMOVE MENU MOBILE*/
function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*CHANGE BACKGROUND HEADER*/
function scrollHeader(){
  const header = document.getElementById('header')
  /*When the scroll is greater than 50 viewport height, add the scroll-header class to header tag*/
  if(this.scrollY >= 40){
    header.classList.add('scroll-header')
  } 
  else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*SCROLL UP*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 200 viewport height, add show-scroll class tag to the a tag with the scroll-top class
  if(screenY => 200){
    scrollUp.classList.add('show-scroll')
  }else{
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)

/*SCROLL SECTION ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageXOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop -50;

    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*SCROLL ANIMATION */
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animete`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`,{origin: 'top', interval: 100})