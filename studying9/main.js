// let element = document.createElement("div");


// a = document.body.appendChild(element);

// a.setAttribute("class", "box")

// a.innerHTML = ("<i>Alwaleed</i>")

// let divElement = document.createElement("div");
// divElement.setAttribute("id", 'x');
// divElement.setAttribute("class", 'box');

// let h1 = document.createElement("h1")
// h1.innerHTML = "welcome"
// document.body.appendChild(h1)
// document.body.appendChild(divElement);





// ********* CRUD OPERATION *********
let productname = document.getElementById('productname');
let productprice = document.getElementById('productprice');
let productcategory = document.getElementById('productcategory');
let productdescrition = document.getElementById('productdescrition');
let submit = document.getElementById('submit');

let arrProducts = []




if(localStorage.getItem("Products") !== null){
    arrProducts =  JSON.parse(localStorage.getItem("Products"))
    DataLoop()    
}

let regex = /[2-9][0-9][0-9]|1000/
submit.addEventListener('click', ()=>{
    if(regex.test(productprice.value) !== false){
        let pdata = {
            pname : productname.value,
            pprice : productprice.value,
            pcategory : productcategory.value,
            pdescription : productdescrition.value
        } 
        arrProducts.push(pdata);
        DataLoop();
        Clear();
        localStorage.setItem('Products', JSON.stringify(arrProducts))
    
    }
    else{
        alert("Cheap Price !!!!")
    }
    })


function DataLoop(){
    let tableData = ""
    let x = 0
    
    for(i = 0; i < arrProducts.length ; i++){
        tableData += `
        <tr>
            <td> ${++x} </td>
            <td> ${arrProducts[i].pname} </td>
            <td> ${arrProducts[i].pprice} </td>
            <td> ${arrProducts[i].pcategory} </td>
            <td> ${arrProducts[i].pdescription} </td>
            <td> <button id='delete' onclick="deleteData(${i})"> Delete </button> </td>
            <td> <button id='update' onclick="updateData(${i})"> Update </button> </td>
        </tr>
        `;
    }
    document.getElementById('data').innerHTML = tableData


}

function Clear(){
    productname.value = ""
    productprice.value = ""
    productcategory.value = ""
    productdescrition.value = ""
}



function deleteData(ele){
    arrProducts.splice(ele,1 )
    localStorage.setItem('Products', JSON.stringify(arrProducts))
    DataLoop()
        
}
let update = document.getElementById('update');
let y;

function updateData(ele){
    y = ele
    productname.value = arrProducts[ele].pname 
    productprice.value = arrProducts[ele].pprice
    productcategory.value = arrProducts[ele].pcategory
    productdescrition.value =  arrProducts[ele].pdescription
    submit.classList.toggle('show')
    update.classList.toggle('show')
    
}

update.addEventListener('click',()=>{
    arrProducts[y].pname =  productname.value
    arrProducts[y].pprice =  productprice.value
    arrProducts[y].pcategory =  productcategory.value
    arrProducts[y].pdescription = productdescrition.value
    submit.classList.toggle('show')
    update.classList.toggle('show')
    Clear()
    DataLoop()
    localStorage.setItem('Products',JSON.stringify(arrProducts))
    
})


// ^[A-Z]([A-Z]|[a-z]|[0-9]){6,}@(gmail|yahoo)\.com