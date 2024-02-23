function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_e6122fb";
    const templateID = "template_0zimvb9";
       
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            setTimeout(() => alert("your message sent successfully"), 1000); // Delaying alert as a test
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document. getElementById("message").value = "";
            console.log(res);
        })
        .catch((err) => console.log(err));
}
