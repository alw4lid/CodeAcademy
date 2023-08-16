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

submit.addEventListener('click', ()=>{
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
            <td> <button id='delete' onclick="deleteData(${x})"> Delete </button> </td>
            <td> <button id='update' onclick="updateData()"> Update </button> </td>
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
    arrProducts.splice('Products',1 )
    localStorage.setItem('Products', JSON.stringify(arrProducts))
    DataLoop()
        
}

function updateData(ele){
    productname = productname.value
    productprice = ele.pprice
    productcategory = ele.pcategory
    productdescrition = ele.pdescription
}


