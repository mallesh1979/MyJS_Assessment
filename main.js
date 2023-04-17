let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  passowrd = id("password"),
  DOB = id("DOB"),
  Email = id(Email),
  Mobile = id("mobile")
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(password, 1, "password cannot be blank");
  engine(DOB, 2, "DOB cannot be blank");
  engine(Email,3,"Email cannot be blank");
  engine(mobile,4,"Mobile cannot be blank")

});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
