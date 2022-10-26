const button = document.getElementById("notifyme");

function validate() { 
    const mail = document.getElementById("email").value;
    const validation = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const errorInput = document.getElementById("email");

    if(validation.test(mail)) {
        alert("Correct");
        return true;
    } else {
        errorInput.style.borderColor = 'hsl(354, 100%, 66%)';
        return false
    }
}

button.addEventListener("click", validate);