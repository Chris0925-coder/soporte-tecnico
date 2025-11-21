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

// const url = `https://visits-christian-guardias-projects.vercel.app/submit`;
const url = 'https://cz5wbbl2-3000.use2.devtunnels.ms/submit';
// https://cz5wbbl2-3000.use2.devtunnels.ms/

// const form = document.querySelector('#formula');
const form1 = document.getElementById('formula');


function handleClick() {
        event.preventDefault();
        grecaptcha.enterprise.ready(async () => {
          const token = await grecaptcha.enterprise.execute("{{6LfYVykqAAAAAJjjqnWXEWHoYS59zqjiLZB4V0ss}}", {
            action: "send_comment",
          });
          await sendComment({ token });
          // await form();
        });
        form();
        
      }

function form() {
    // console.log(form1)

        form1.addEventListener('submit', async function(event) {
        event.preventDefault(); 
        // Prevent default form submission
        const formData = new FormData(form1);

        if (formData.get('email').length == 0 || formData.get('control').length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">Field is required.</span>';
            return false;
        } 

          await fetch(url, {
            method: 'POST',
            body: JSON.stringify({

                email: formData.get('email'), 
                control: formData.get('control'),
                token: token,
                }),
          })
          .then((response) => response.text())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error:', error));
        


        alert('Form submitted successfully!');


        window.location.href = "https://soporte-tecnico.pages.dev/";
      });
}
// form();

function submitUserForm() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">This field is required.</span>';
        return false;
    }
    // console.log(response); 
    // return true;
    form();
};


// <script type="text/javascript">
      async function sendComment({ comment = "", token }) {
        // Include the token for server-side assessment.
        // Include the user input values from your form to pass to the backend.
        const body = {
          comment,
          token,
        };
        // Code for fetching the assessment from server-side goes here.
        // Refer to demo app backend code for more information.
        // If you already use a library or framework for event handlers, you 
        // can handle events your usual way.
        const score = await fetchServerResponse({
          body,
          url: "on_comment_submit",
        });
        // In this demo, the assessment score is displayed in the client.
        // But, you should AVOID using the assessment response in the
        // client and handle it on the server-side.
        useAssessmentInClient(score);
      }
    // </script>

// form();
 handleClick();
// form.addEventListener('onsubmit', submitUserForm);
// function verifyCaptcha() {
//     document.getElementById('g-recaptcha-error').innerHTML = 'Error';
// };

// submitUserForm();

