let header = document.getElementById('header')
let screenWidth = window.screen.width
let screenHeight = window.screen.height
let logo = document.getElementById('logo-wrap')
let navBar = document.getElementById('navbarNavAltMarkup')
let imgOver = document.getElementById('about-img-over')

if(screenWidth>2300){
  header.style.backgroundImage = "url('img/cover2000.png')";
  logo.style.marginLeft = '230px'
  navBar.style.marginRight = '200px'
  imgOver.style.paddingLeft = '400px'
}