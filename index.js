let url = "https://randomuser.me/api/";
let fullnameDisp = document.querySelector("#fullname");
let avatar = document.querySelector("#avatar");
let username = document.querySelector("#username");
let city = document.querySelector("#city");
let email = document.querySelector("#email");

let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors);
});

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

const parseJSON = res => {
  return res.json().then(function(parsedData) {
    return parsedData.results[0];
  });
};

const updateProfile = data => {
  var fullname = data.name.first + " " + data.name.last;
  fullnameDisp.innerText = fullname;
  avatar.src = data.picture.medium;
  username.innerText = data.login.username;
  city.innerText = data.location.city;
  email.innerText = data.email;
};

const displayErrors = err => {
  console.log("INSIDE displayErrors!");
  console.log(err);
};
