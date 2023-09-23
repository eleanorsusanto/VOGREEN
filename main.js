function validation() {
    var x = document.forms["kontak"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["kontak"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    var z = document.forms["kontak"]["gender"].value;
    if (z == 1) {
        alert("Please choose your gender");
        return false;
    }
    var a = document.forms["kontak"]["message"].value;
    if (a == "") {
        alert("Message must be filled out");
        return false;
    }
    // for radio button subs
    var option=document.getElementsByName('sub');
     
    if (!(option[0].checked)) {
        alert("Subscribe to us first before sending your message");
        return false;
    }
    
    // if submit pressed then alerts the user that the form has been submitted
    alert("Your message has been sent");
}

// function to subscribe to subscribed
function yesno(thecheckbox, thelabel){
    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (checkboxvar.checked == false){
        labelvar.innerHTML = " Subscribe";
    }
    else{
        labelvar.innerHTML = " Subscribed";
    }
}

// function yujinia(){
//     var checkboxvar = document.getElementById("sub");
//     var labelvar = document.getElementById("subs");
//     if (checkboxvar.checked == false){
//         labelvar.innerHTML = "Subscribe";
//     }
//     else{
//         labelvar.innerHTML = "Subscribed";
//     }
// }

function max(a,b){
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}
