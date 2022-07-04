window.onload = function() {
    let loginStatus = localStorage.getItem('loginStatusKey'); 
    if(loginStatus != 1){
        window.location.href="index.html";
    }    
}

async function logoutClick(){
    localStorage.setItem('loginStatusKey', 0)
    window.location.href="index.html";
}

/* --USERS TABLE LOAD USING FETCH-- */
var arrayListUsers = Array();

fetch('https://basic-server-one.vercel.app/users')
.then(data => {
    return data.json();
})
.then(response => {
    for (let i = 0; i < response.data.length; i++) {
        arrayListUsers[i] = response.data[i];
        /* --Loading table-- */
        // GET TABLE
        var table = document.getElementById("usersTable");
        // INSERT ROW
        var row = table.insertRow();    
        // INSERT CELLS
        var cell = row.insertCell();
        cell.innerHTML = arrayListUsers[i].id;
        var cell = row.insertCell();
        cell.innerHTML = arrayListUsers[i].name;
        var cell = row.insertCell();
        cell.innerHTML = arrayListUsers[i].username;
        var cell = row.insertCell();
        cell.innerHTML = arrayListUsers[i].email;
        var cell = row.insertCell();
        cell.innerHTML = arrayListUsers[i].website;
        var cell = row.insertCell();
        cell.innerHTML = arrayListUsers[i].address.street +' | '+ arrayListUsers[i].address.suite +' | '+ arrayListUsers[i].address.city +' | '+ arrayListUsers[i].address.zipcode;
        /* --Loading table-- */
    }
})
.catch(function(error){
    // console.log("Error", error);
    // alert("ERROR" +'\n'+ error);

    // Get the modal
    var modal = document.getElementById("dashModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    // alert("Usuario y contraseña invalidos")
    // localStorage.setItem('loginStatusKey', 0)

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
})
/* --USERS TABLE LOAD USING FETCH-- */