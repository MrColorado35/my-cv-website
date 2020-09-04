function sendMail(contactForm){
    emailjs.send("gmail","aikido", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            alert("SUCCESS! Your message has been send", response);
        },
        function(error){
            console.log("ERROR", error);
        })
    .then(
		function redirect() {
			location.replace("index.html");
		});
return false;
}