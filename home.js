const btn = document.querySelector("#Btn");

const input = document.querySelector("#set_Discription");



function Verify() {
 if (input.value.length > 1) {
   btn.classList.add('active');
   btn.style.color = "#01FF3E";
   btn.disabled = false;
 } else {
btn.classList.remove('active');
btn.style.color = "#fff";
btn.disabled = true;
 }
}

window.onload = () => {
  const pass = document.querySelector("#Pass");
const email = document.querySelector("#Email");
  
  let  user = localStorage.getItem("user");
  let  Email = localStorage.getItem("email");
 
  
  pass.innerHTML = user;
email.innerHTML = Email;
document.querySelector("#UserName").innerHTML = user;
setInterval(update, 125);

if (localStorage.getItem("user", "email")) {
  console.log("");
} else {
  window.location.pathname = './CardCreator//index.html'
}
}


function update() {
  Verify();
}

function Set_disr() {
  document.querySelector('input').style.display = "none";
let discription = document.querySelector('input').value;

document.querySelector(".card_set_dis").innerHTML = discription;
btn.style.display = 'none';
localStorage.setItem("Dis", discription);
let createbtn = document.createElement("div");
     createbtn.innerHTML = `
        <button onclick="Dataclear()" id="Btn" class="active" >Reset</button>
     `;
     document.querySelector(".card_set_dis").appendChild(createbtn);
     
  let createbtn2 = document.createElement("div");
  createbtn2.innerHTML = `
          <button onclick="submitData()" id="Btn" class="Submit" >Submit</button>
       `;
  document.querySelector(".card_set_dis").appendChild(createbtn2);
}

function showData() {
 if (localStorage.getItem("Dis")) {
   document.querySelector(".card_set_dis").innerHTML =
     localStorage.getItem("Dis");
 } else {
   btn.style.display = 'block';
   document.querySelector('input').style.display = "block";
   let createbtn = document.createElement("div");
   createbtn.style.display = 'none';
 }
}

function Dataclear() {
  localStorage.clear();
  window.location.reload();
}
showData();
