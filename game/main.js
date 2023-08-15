let box = document.querySelectorAll(".box");

const randomColor = ()=>{
    const colors = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    return colors
}

box.forEach((x)=>{
    x.addEventListener("mouseenter", ()=>{
        x.style.backgroundColor = randomColor()
    })
    x.addEventListener("mouseleave", ()=>{
        x.style.backgroundColor = ""
    })
})