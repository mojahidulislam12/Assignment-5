console.log("Success");
document.getElementById("login-btn").addEventListener("click", function () {
  console.log("Login");

  //1.Get the Name
  const inputName = document.getElementById("input-name");
  const nameValue = inputName.value;
  //2.Get the password
  const inputPass = document.getElementById("input-password");
  const passValue = inputPass.value;
  //3.match name and pass
  if (nameValue == "admin" && passValue == "admin123") {
    //3.1.true :alert >home page

    window.location.assign("/home.html");
  } else {
    alert("Invalid Name and Password");
    return;
  }

  //3.2.false : alert>return
});
