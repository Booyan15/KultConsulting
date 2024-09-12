const form = document.querySelector('form');
const fullName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Име и презиме: ${fullName.value}<br>Телефонски број: ${phone.value}<br>
    Email: ${email.value}<br>Порака: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kultconsulting2@gmail.com",
        Password : "C633999F8BC9042448F4191D49B265A863A9",
        To : 'kultconsulting2@gmail.com',
        From : "kultconsulting2@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Ви благодариме",
                text: "Успешно е испратена пораката",
                icon: "success"
            });

            // Reset the form after success
            form.reset();
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
