window.onload = function() {
    let loginStatus = localStorage.getItem('loginStatusKey'); 
    if(loginStatus == 1){
        window.location.href="dashboard.html";
    }

    /* -- Input keypress event -- */
    var input1 = document.getElementById("emailLogin");
    var input2 = document.getElementById("passLogin");
    
    input1.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            clickLogin();
        }
    });

    input2.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            clickLogin();
        }
    });
    /* -- Input keypress event -- */

    // Input verification

    
    var textEmail = document.getElementById('emailLogin');
    var textPass = document.getElementById('passLogin');
    
    var emailError = document.getElementById('noEmailError');
    var emailFormError = document.getElementById('formEmailError');
    var passError = document.getElementById('noPassError');

    textEmail.addEventListener('blur', validateEmail);
    textEmail.addEventListener('focus', clearEmailError);

    textPass.addEventListener('blur', validatePass);
    textPass.addEventListener('focus', clearPassError);

    function clearEmailError(e) {
        emailError.classList.add('hiddenError');
        emailFormError.classList.add('hiddenError');
        // textEmail.classList.remove('alertRed');
    }

    function clearPassError(e) {
        passError.classList.add('hiddenError');
        // textEmail.classList.remove('alertRed');
    }

    function validateEmail(e) {
        var x = textEmail.value;
        var mailFormat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (x == "") {
            document.getElementById("noEmailError").classList.remove('hiddenError');
            return false;
        } else if(mailFormat.test(x) == false){        
            document.getElementById("formEmailError").classList.remove('hiddenError');
            return false;
        } else {
            return true;
        }
    }

    function validatePass(e) {
        var x = textPass.value;
        if(x == "") {
            passError.classList.remove('hiddenError');
            }
        }
    

}


/* -- Json Post and user verification-- */
async function clickLogin(){

    validateBtnEmail();
    validateBtnPassword()

    let x = await fetch("https://basic-server-one.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // email: "valeria@gmail.com",
            // password: "lppa2022",
            email: document.getElementById('emailLogin').value,
            password: document.getElementById('passLogin').value
        })
    })
    if (x.status == 200){
        localStorage.setItem('loginStatusKey', 1);
        window.location.href="dashboard.html";
    }
    else{
        // Get the modal
        var modal = document.getElementById("indexModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";
        // alert("Usuario y contraseña invalidos")
        localStorage.setItem('loginStatusKey', 0)

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    }
}


function validateBtnEmail() {
    let x = document.getElementById("emailLogin").value;
    var mailFormat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (x == "") {
        document.getElementById("noEmailError").classList.remove('hiddenError');
        return false;
    } else if(mailFormat.test(x) == false){        
        document.getElementById("formEmailError").classList.remove('hiddenError');
        return false;
    } else {
        return true;
    }
}

function validateBtnPassword() {
    let x = document.getElementById("passLogin").value;
    if (x == "") {
        document.getElementById("noPassError").classList.remove('hiddenError');
        return false;
    } else {
        return true;
    }
}



