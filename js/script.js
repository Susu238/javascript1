document.querySelector('.switcher-btn').onclick =() =>{
    document.querySelector('.color-switcher').classList.toggle('active');

}

let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach((color=>{
color.addEventListener('click',()=>{
    var data = color.getAttribute('data-color')
    document.body.style.backgroundColor =data
})}
))


var imgs = document.getElementsByTagName('img')