const navToggle = document.querySelector(".navbar-toggler")
const navLink = document.querySelector(".navbar-nav")

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});




const form = document.getElementById("formula");
var email = document.querySelector("[name=email]").value;
var control = document.querySelector("[name=control]").value;
const btn = document.querySelector(".btn");
console.log(form);
console.log(email.length);
console.log(control.length);
console.log(btn);

btn.addEventListener("click", () => {
        email = document.querySelector("[name=email]").value;
        control = document.querySelector("[name=control]").value;
    if (email == "" || control == "") {
        alert("Rellene los espacios");
    }  else {
        alert("¡GRACIAS! su comentario será leído...")
    }
});



const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(
        event.target.email.value,
        event.target.control.value
        );
};

// form.addEventListener("submit", () => {
//     enviarFormulario();
//     fetch("https://api.mailjet.com/v3.1/send", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// });

//   function onClick(e) {
//     e.preventDefault();
//     grecaptcha.enterprise.ready(async () => {
//       const token = await grecaptcha.enterprise.execute('6LfMzhspAAAAAPPDgx5sn3yYKbAMmmDYc2KNZcvY', {action: 'LOGIN'});
//     });
//   }

// onClick(btn);


// var onloadCallback = function() {
//     alert("grecaptcha is ready!");
//   };


// function onSubmit(token) {
//     document.getElementById("demo-form").submit();
//   }

