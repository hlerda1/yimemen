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


//USERS TABLE LOAD USING FETCH
var arrayListUsers = Array();

fetch('https://basic-server-one.vercel.app/users')
.then(data => {
    return data.json();
})
.then(response => {
    // console.log(response.data)
    for (let i = 0; i < response.data.length; i++) {
        arrayListUsers[i] = response.data[i];
        // console.log(arrayListUsers[i].address.street);

        // Loading table
        // (B1) GET TABLE
        var table = document.getElementById("usersTable");
  
        // (B2) INSERT ROW
        var row = table.insertRow();
    
        // (B3) INSERT CELLS
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

    }
})
.catch(function(error){
    console.log("Error", error)
    alert("ERROR")
})