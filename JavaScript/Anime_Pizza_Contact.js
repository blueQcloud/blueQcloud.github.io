var theForm = document.getElementById("contact_form");

function validateName() {
    var name = document.forms["contact_form"]["Name"].value;
    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }
}

function validateEmail() {
    var email = document.forms["contact_form"]["E-mail"].value;
    if (email == ("")  == true){
        alert("Please enter an E-mail");
        return false; }

    else if (!email.includes("@") == true){
        alert("Please use proper E-mail");
        return false;}

}


function validateFeedback() {
    var feedback = document.forms["contact_form"]["Feedback"].value;
    if (feedback == "") {
        alert("Please provide feedback.");
        return false;
    }
}



function validation() {
    var validate = validateName() + validateEmail() + validateFeedback()
    document.getElementById(validate).innerHTML = "validator"
}