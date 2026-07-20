// Show Password

document.getElementById("showPassword").addEventListener("change", function () {

    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    if (this.checked) {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
});



// Form Validation

document.getElementById("registrationForm").addEventListener("submit", function(event){

    event.preventDefault();

    document.querySelectorAll(".error").forEach(function(item){
        item.innerHTML="";
    });

    document.getElementById("successMessage").innerHTML="";

    let fullname=document.getElementById("fullname").value.trim();
    let roll=document.getElementById("roll").value.trim();
    let email=document.getElementById("email").value.trim();
    let mobile=document.getElementById("mobile").value.trim();
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let department=document.getElementById("department").value;
    let dob=document.getElementById("dob").value;

    let gender=document.querySelector('input[name="gender"]:checked');

    let valid=true;

    if(fullname===""){
        document.getElementById("nameError").innerHTML="Full Name is required";
        valid=false;
    }

    let rollPattern=/^[A-Za-z0-9]+$/;

    if(!rollPattern.test(roll)){
        document.getElementById("rollError").innerHTML="Roll Number must contain only letters and numbers";
        valid=false;
    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML="Enter a valid Email";
        valid=false;
    }

    let mobilePattern=/^[0-9]{10}$/;

    if(!mobilePattern.test(mobile)){
        document.getElementById("mobileError").innerHTML="Enter exactly 10 digits";
        valid=false;
    }

    if(password.length<8){
        document.getElementById("passwordError").innerHTML="Password must be at least 8 characters";
        valid=false;
    }

    if(password!==confirmPassword){
        document.getElementById("confirmError").innerHTML="Passwords do not match";
        valid=false;
    }

    if(gender==null){
        document.getElementById("genderError").innerHTML="Please select Gender";
        valid=false;
    }

    if(department===""){
        document.getElementById("departmentError").innerHTML="Select Department";
        valid=false;
    }

    if(dob===""){
        document.getElementById("dobError").innerHTML="Select Date of Birth";
        valid=false;
    }

    if(valid){
        document.getElementById("successMessage").innerHTML="Registration Successful!";

        document.getElementById("registrationForm").reset();
    }

});