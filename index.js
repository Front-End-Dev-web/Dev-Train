let header  = document.getElementById('header')
let nav = document.querySelector('.logo img')
let btn = document.querySelectorAll('.nav-link')
let button = document.querySelector('.li-item button')


window.onscroll=()=>{
    if(window.scrollY>50){
        btn.forEach((element)=>{
            element.classList.add('active')
        })      
        nav.src="images/4.jpg"
header.classList.add('active')
button.classList.add('active')
}else if(window.scrollY<50){
    header.classList.remove('active')
    btn.forEach((element)=>{
        element.classList.remove('active')
        // element.classList.add('active')
            })      
        nav.src="images/Full white logo.png"
        button.classList.remove('active')
    }
}





















