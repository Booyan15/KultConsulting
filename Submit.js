
 // Replace with your EmailJS user ID
 emailjs.init("M_RAsaq3lvclGvoC0");

  function emailSend() {
    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // EmailJS service and template IDs
    const serviceID = 'aOOc7NWLoc10KV5wYagat'; // Replace with your EmailJS service ID
    const templateID = 'template_vmyl8if'; // Replace with your EmailJS template ID

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_phone: phone,
      from_email: email
    })
    .then(response => {
      console.log('Email sent successfully:', response);
      alert('Твојата порака е испратена');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('Настана грешка при испраќањето на вашата порака. Ве молиме обидете се повторно.');
    });
  }

