function compareEmails() {

    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;

    if (email1 === email2) {
        alert("Emails match!");
    }
    else {
        alert("Emails do not match!");
        return false;
    }
}


