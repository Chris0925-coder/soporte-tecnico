const navToggle = document.querySelector(".navbar-toggler")
const navLink = document.querySelector(".navbar-nav")

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});







const form = document.getElementById("formula");
let email = document.querySelector("[name=email]").value;
let control = document.querySelector("[name=control]").value;
const btn = document.querySelector(".btn");
// console.log(form);
// console.log(email.length);
// console.log(control.length);
// console.log(btn);



btn.addEventListener("click", () => {
    // event.preventDefault();
    email = document.querySelector("[name=email]").value;
    control = document.querySelector("[name=control]").value;
    // mail = email.length;
    console.log(email);


    
    if (!verificamail(email)) {
        alert("Ingrese una direccion valida");
        event.preventDefault();
    } else {
        // continue;
        alert("¡Gracias por su comentario!");
        // continue;
        return;
    }

    function verificamail(a) {
       return a.length - a.replaceAll("@", "").length == 1;
    };
});
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
// console.log(grecaptcha);
// let onloadCallback = function() {
//         grecaptcha.render(html, {
//           'sitekey' : '6Le1UBwpAAAAAHzagcQvjzbPGK2g7TvoJiLyNSO5'
//         });



// function enabledSubmit(a) {
//     if (email.focus != "") {
//         a.style.display = "flex";
//     };
// };

// enabledSubmit(btn);