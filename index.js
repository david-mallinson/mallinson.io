function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_e6122fb";
    const templateID = "template_0zimvb9";
       
    emailjs
        alert ("your message sent successfully");
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document. getElementById("message").value = "";
            console.log(res);
        })
        .catch((err) => console.log(err));
}
