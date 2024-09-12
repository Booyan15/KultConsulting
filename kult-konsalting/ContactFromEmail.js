function emailSend(){

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = 'Name' + userName +
    "<br/> Phone" + phone +
    "<br/> Email" + email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kultkonsalting2024@gmail.com",
        Password : "79D8317B7FA0802CD10C232592D285D41FAC",
        To : 'kultconsulting2@gmail.com',
        From : "kultkonsalting2024@gmail.com",
        Subject : "Нова порака",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}