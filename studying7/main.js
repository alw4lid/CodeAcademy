// let v = document.getElementById('v');


// let ele = '<h1> Hello from JS </h1>';

// v.innerHTML = ele

// c = document.querySelector('.hello');

// // c.textContent = "<h2>Selection All h2</h2>"; //=> will write all th content with the h2 tag

// c.innerHTML = "<h2>Selection All h2</h2>"; //=> will write it in the h2 element
// c.innerHTML += "<h2>Testing the plus sign</h2>"; //=> will write both elements
// c.innerHTML += "<h2>Testing the plus sign 2</h2>"; //=> will write both elements
// c.innerHTML += "<h2>Testing the plus sign 3</h2>"; //=> will write both elements



// c.style.color = "green"




// let btn = document.getElementById('btn');

// btn.addEventListener('click', ()=>{
//    let no1 = document.getElementById('no1').value;
//    let no2 = document.getElementById('no2').value;
//    result = Number(no1) + Number(no2);
// //    result = parseInt(no1) + parseInt(no2);

//    document.getElementById('answer').innerHTML = result
// })



// let change = document.getElementById('change');

window.addEventListener('keydown', function(x){
    // console.log(x.code);
    if(x.code === "ArrowRight"){
        let myclass = document.getElementsByClassName('radius')[0]; 

        myclass.style.marginLeft = "+100px"
        
    }
    else if(x.code === "ArrowLeft"){
        let myclass = document.getElementsByClassName('radius')[0]; 

        myclass.style.marginLeft = "-100px"
    }
    else if(x.code === "ArrowDown"){
        let myclass = document.getElementsByClassName('radius')[0]; 

        myclass.style.marginBottom = "100px"
    }

});

setTimeout( function(){
    let myclass = document.getElementsByClassName('boxx')[0]; 
    myclass.style.display = 'none';
    
},2000)
