// let formButton = document.getElementById('form-button');
// let formName = document.getElementById('cost-form-name');
// let formPhone = document.getElementById('cost-form-phone');
// let formEmail = document.getElementById('cost-form-email');
// let formProducts = document.getElementById('cost-form-products');
// let formCode = document.getElementById('cost-form-code');
// let formDocument = document.getElementById('cost-form-documents');
// let formInfo = document.getElementById('cost-form-textarea');

// formButton.addEventListener('click', () => {
//   formName.value='';
//   formPhone.value='';
//   formEmail.value='';
//   formProducts.value='';
//   formCode.value='';
//   formDocument.value='';
//   formInfo.value='';
  
// })

let header = document.getElementById('header')
let screenWidth = window.screen.width
let logo = document.getElementById('logo-wrap')
let navBar = document.getElementById('navbarNavAltMarkup')
let imgOver = document.getElementById('about-img-over')

if(screenWidth>2200){
  header.style.backgroundImage = "url('img/cover2000.png')";
  logo.style.marginLeft = '230px'
  navBar.style.marginRight = '200px'
  imgOver.style.paddingLeft = '400px'
}