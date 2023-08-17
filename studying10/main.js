


let username = document.getElementById("username");
let PhoneNo = document.getElementById("PhoneNo");
let Gender = document.getElementById("Gender");
let submit = document.getElementById("submit");

let arrayOfobj = [];
submit.addEventListener("click", () => {
  let Ndata = {
    uname: username.value,
    pno: PhoneNo.value,
    gender: Gender.value,
  };
  arrayOfobj.push(Ndata);
  Looptable();
  localStorage.setItem('Details', JSON.stringify(arrayOfobj))
});

function Looptable() {
  let thead = "";
  let x = 0;

  for (i = 0; i < arrayOfobj.length; i++) {
    thead += `
    <tr>
        <td>${++x}</td>
        <td>${arrayOfobj[i].uname}</td>
        <td>${arrayOfobj[i].pno}</td>
        <td>${arrayOfobj[i].gender}</td>
        <td><button id='delBtn' onclick="delBtn(${i})">Delete</button></td>
        <td><button id='upBtn'>Update</button></td>
    <tr>
    
          `;
  }
  document.getElementById("info").innerHTML = thead;
}

function delBtn(ele){
    arrayOfobj.splice(ele,1 )
    localStorage.setItem('Details', JSON.stringify(arrayOfobj))
    Looptable()
        
}

