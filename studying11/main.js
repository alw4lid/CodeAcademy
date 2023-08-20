// // let img1 = document.getElementById('img1')
// // let img2 = document.getElementById('img2')
// // let img3 = document.getElementById('img3')


// // let images = ['img/images/jpg', 'img/images2.jpg', 'img/images3.jpg']


// let bg = document.getElementById("bg");
// let box1 = document.getElementById("box1");
// let lis = document.getElementsByTagName("li")


// if(localStorage.getItem('Colors') !== null){
//     let pic = JSON.parse(localStorage.getItem('Colors'))
//     bg.style.background = pic
// }


// for(let i = 0; i < lis.length; i++){

//     lis[i].addEventListener("click", ()=>{
//         let x = lis[i].getAttribute("x")
//         bg.style.background = x,
//         box1.innerHTML = x
//         localStorage.setItem('Colors', JSON.stringify(x))
//     })
// }


let navbar = document.getElementById('navbar');


window.addEventListener('scroll', ()=>{
    if(window.scrollY > 120){
        navbar.style.position = 'fixed'
    }
    else{
        navbar.style.position = 'static'
    }
})


