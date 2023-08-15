// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 =  document.getElementById("box3");
// let box4=  document.getElementById("box4");


// let start = document.getElementById('start');


// start.addEventListener(("click"),()=>{
//     setTimeout(()=>{
//         box1.style.display = "block";
//     },1000)
    
//     setTimeout(()=>{
//         box2.style.display = "block";
//     },2000)
    
//     setTimeout(()=>{
//         box3.style.display = "block";
//     },3000)
    
//     setTimeout(()=>{
//         box4.style.display = "block";
//     },4000)
// })



// let nav = document.getElementsByClassName("nav");

// window.addEventListener(("scroll"),()=>{
//     console.log(window.scrollY)
//     if(window.scrollY >= 10){
//         nav.style.backgroundColor = "red";
//     }
// })

// let bg = document.getElementById("bg1");
// let lis = document.getElementsByTagName("li")


// if(localStorage.getItem('Colors') !== null){
//     let pic = JSON.parse(localStorage.getItem('Colors'))
//     bg.style.background = pic
// }


// for(let i = 0; i < lis.length; i++){

//     lis[i].addEventListener("click", ()=>{
//         let x = lis[i].getAttribute("x")
//         bg.style.background = x
//         localStorage.setItem('Colors', JSON.stringify(x))
//     })
// }


// let mainImg = document.getElementById("mainImg")
// let img = document.getElementsByClassName('image')

// if(localStorage.getItem('Images') !== null){
//          let pic = JSON.parse(localStorage.getItem('Images'))
//          bg.style.background = pic
//     }


// for (let i = 0; i < img.length; i++){
//     img[i].addEventListener('click', ()=>{
//         let sources = img[i].getAttribute("src")
//         // console.log(sources)
//         mainImg.setAttribute('src', sources)
//         localStorage.setItem('Images', JSON.stringify(sources))
//     })
// }