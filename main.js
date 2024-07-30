
const email = document.querySelector("#email");
const button = document.querySelector('#btn1');
const btn2 = document.querySelector("#Btn2");
const error = document.querySelector("#Error2");
const user = document.querySelector("#User");

function VerifyUser() {
if (user.value.length > 6 ) {
  btn2.disabled = false;
  btn2.classList.add('active');
} else if (user.value.length = 7) {
  btn2.disabled = true;
  btn2.classList.remove('active');
} else {
  btn2.disabled = true;
  btn2.classList.remove('active');
}
}

function VerifyEmail() {
  if (email.value.includes('@') && email.value.includes('.com')) {
    button.classList.add('active');
    button.removeAttribute("disabled");
    error.style.display = 'none'
  } else {
    button.classList.remove('active');
   button.disabled = true;
  } 
}

window.addEventListener('load', () => {
  setInterval(update, 125);
  if (localStorage.getItem("user", "email")) {
 window.location.pathname = './home.html';
  } else {
  }
}); 

function update() {

VerifyEmail();
VerifyUser();

}

function SignUp() {
  Verify();
}

button.onclick = () => {
  console.log("Clicked");
  localStorage.setItem("email", email.value);
 const L1 = document.querySelector("#L1");
 L1.style.display = "none";
  document.querySelector("#L2").style.display = "block";
  error.style.display = 'block';
}

function SignUp2() {
  const Redirect = () => {
    window.location.pathname = './Home/home.html';
  }
  localStorage.setItem("user", user.value);
    
  if (btn2.classList = 'active') {
setTimeout(Redirect, 2000);
  }
}
