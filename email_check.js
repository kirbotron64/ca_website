function compareEmails() {

    var email1 = document.getElementById('email1').value;
    var email2 = document.getElementById("email2").value;

    if (email1 != email2) {
        /*change email 2 bg color to red*/
        changeBGColor("red");
    }
    else {
        /*return email 2 bg color to default*/
        changeBGColor("white")
    }
}

function changeBGColor(newColor) {
    let email2 = document.getElementById("email2");
    email2.style.backgroundColor = newColor;
}