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

// event.preventDefault();
// mail = "cguardia@gmail.com";
//     let x = mail.split("@");
//     console.log(x[1]);
//     let l = x[1];
//     let v = [
//         "@", 
//         "gmail", 
//         "outlook", 
//         "yahoo", 
//         "ymail"
//         ]
//     let y = x.includes("@");
//     let m = m.includes(v);

btn.addEventListener("click", () => {
    // event.preventDefault();
    email = document.querySelector("[name=email]").value;
    control = document.querySelector("[name=control]").value;
    // mail = "cguardia@gmail.com";
    let x = email.split("");


    // console.log(x[1]);
    // let w = x[1];
    // let v = [
    //     "@", 
    //     "gmail", 
    //     "outlook", 
    //     "yahoo", 
    //     "ymail"
    //     ];
    // console.log(v);
    // d = f.forEach(v);
    // console.log(d);
        
    let y = x.includes("@");
    console.log(y);
        // function f() {
        // w.includes(v);
    //     let w = x[1];    
    // };
    // let m = w.includes(d);
    // console.log(m);
    response = grecaptcha.getResponse();
    if (!y || response.length == 0) {
        alert("Ingrese una direccion valida");
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">This field is required.</span>';
        event.preventDefault();
    } else {  
        return alert("¡Gracias por su comentario!");
    }
});
// let ma = "cguardia@gmail.com";
// array = ma.split("");
// l = array.map;
// console.log(array);
// let x = l == "@";
// event.preventDefault();
// console.log(ma);
// console.log(x);
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

function submitUserForm() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">This field is required.</span>';
        return false;
    };
    return true;
};

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
};