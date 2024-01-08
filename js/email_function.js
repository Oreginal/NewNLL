// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "oreutlwilediutlwileng@gmail.com",
//         Password : "FFC525CD4512846B2E4DC7AA6470587FEB66",
//         To : 'info@newleaseoflifefoundation.org',
//         From : document.getElementById("Email").value,
//         Subject : "New form",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
    };
    
    const serviceID = "service_g992vd8";
    const templateID = "template_cm1dq4g";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("phone").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

  
  function closePopup() {
      document.getElementById("popup").style.display = "none";
  }

  // Show the popup when the page loads
  window.onload = function () {
      document.getElementById("popup").style.display = "block";
  };
