window.onload = function() {
    let loginStatus = localStorage.getItem('loginStatusKey'); 
    if(loginStatus == 1){
        window.location.href="dashboard.html";
    }
}

async function clickEnviar(){
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
    // console.log(x.status);
    if (x.status == 200){
        localStorage.setItem('loginStatusKey', 1)
        // console.log('OK')
        window.location.href="dashboard.html";
    }
    else{
        console.log('Not OK')
        alert("Usuario y contraseña invalidos")
        localStorage.setItem('loginStatusKey', 0)
    }
}

