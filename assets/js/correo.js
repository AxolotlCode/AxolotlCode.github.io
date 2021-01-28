function sendEmail()   {  
    var response = grecaptcha.getResponse();
    if(response.length == 0){
        const elemento = document.getElementById("notification");
        const title = document.getElementById("texto1");
        const menssage = document.getElementById("texto2");
        elemento.className = ''
        elemento.className += "alert mb-0 alert-danger";
        title.textContent="¡Tienes que llenar el captcha para continuar!";
        menssage.textContent="Hubo un error al enviar el mensaje";
        $('.toast').toast('show')
        setTimeout(function(){  $('.toast').toast('hide') }, 2500);
        
    } else {
        Email.send({
            Host: "smtp.gmail.com",
            Username : "<sender’s email address>",
            Password : "<email password>",
            To : '<recipient’s email address>',
            From : "<sender’s email address>",
            Subject : "<email subject>",
            Body : "<email body>",
        })
        .then(function(message){
            const elemento = document.getElementById("notification");
            const title = document.getElementById("texto1");
            const menssage = document.getElementById("texto2");
            elemento.className = ''
            elemento.className += "alert mb-0 alert-success";
            title.textContent="¡Tú mensaje se envio correctamente!";
            menssage.textContent="Pronto nos pondremos en contacto contigo.";
            $('.toast').toast('show')
            setTimeout(function(){  $('.toast').toast('hide') }, 2500);
        });
    }
}  