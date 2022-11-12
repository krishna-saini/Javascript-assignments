
const regex =
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$";
const regex2 = "/[w._%+-]+@[/w.-]+[a-zA-Z]{8,14}/";

const passwordEl = document.querySelector("#password");
const cpasswordEl = document.querySelector("#confirm-password");

cpasswordEl.addEventListener("focus", function () {
  cpasswordEl.setAttribute("type","password");
  cpasswordEl.value="";
});

const formEl = document.querySelector("form");
formEl.addEventListener("submit", (e) => {
  // e.preventDefault();
  if(passwordEl.value !== cpasswordEl.value){
    cpasswordEl.setAttribute("type","text")
    cpasswordEl.value = "password does not match";
     return;
  }
 console.log(this);
});
