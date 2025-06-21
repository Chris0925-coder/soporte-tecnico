// const navToggle = document.querySelector(".navbar-toggler")
// const navLink = document.querySelector(".navbar-nav")

// navToggle.addEventListener("click", () => {
//     navLink.classList.toggle("navbar-nav_visible")
// });


const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".off");
const close = document.querySelector(".btn-close");

navBoton.addEventListener('click', () => {
    navLink.classList.toggle("hidden-nav");
});

close.addEventListener('click', () => {
    navLink.classList.toggle("hidden-nav");
});

// const form = document.getElementById("formula");
// let email = document.querySelector("[name=email]").value;
// let control = document.querySelector("[name=control]").value;
// const btn = document.querySelector(".btn");

// let grecaptcha = getCookie('_grecaptcha');

// console.log(reCaptcha);

// if (!reCaptcha) {
//     btn.style.display = 
// }

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

// btn.addEventListener("click", () => {
//     setTimeout(
//     window.location.href = "https://christech507.000webhostapp.com", 5000);
    // email = document.querySelector("[name=email]").value;
    // control = document.querySelector("[name=control]").value;
    // let x = email.split("");    
    // let y = x.includes("@");
    // response = grecaptcha.getResponse();
    // if (!y || response.length == 0) {
    //     alert("Ingrese una direccion valida");
    //     document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">This field is required.</span>';
    //     event.preventDefault();
    // } else {  
    //     return alert("¡Gracias por su comentario!");
    // }
// });

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
// const url = 'localhost:3000/submit';
const url = `https://visits-christian-guardias-projects.vercel.app/submit`;

// const form = document.querySelector('#formula');

function submitUserForm() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">This field is required.</span>';
        return false;
    } else {
        document.getElementById('formula').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(this);
        console.log('Message:', formData.get('email'),formData.get('control'));

        try {
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Error submitting form.');
          }
        } catch (error) {
          console.error('Submission failed:', error);
        }


        alert('Form submitted successfully!');
      });
    }
    // return true;
};

 
// form.addEventListener('onsubmit', submitUserForm);
// function verifyCaptcha() {
//     document.getElementById('g-recaptcha-error').innerHTML = 'Error';
// };

// submitUserForm();

