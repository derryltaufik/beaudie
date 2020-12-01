//get name
let name = document.getElementById('nametxt').value;
//get skin type
let selected = document.getElementById('stype').value;
//get address
let address = document.getElementById('address').value;
//get gender
let gender = document.forms["register"]["gender"].value;
console.log(gender);
//get email
let mail = document.getElementById('email').value;
//get password
let pass = document.getElementById('pass').value;
let addMsg = "";


document.getElementById('subBtn').addEventListener('click', chkForm);

function validateEmail(mail) {

    console.log(mail);
    var atSymbol = mail.indexOf("@");
    console.log(atSymbol);
    if(atSymbol < 1) return false;

    var dot = mail.indexOf(".");
    if(dot <= atSymbol + 1) return false;

    if (dot === mail.length - 1) return false;

    return true;
}
function isDigit(c){
    return c >= '0' && c <= '9';
}
function chkForm(){

    //checking name
    name = document.getElementById('nametxt').value;
    if(name.length < 5){
        document.getElementById('errorMsg').innerHTML = 'name must be at least 5 characters long';
        // alert('name must be at least 5 characters long');
        return false;
    } 
    else{
        var length = name.length;
        for( var i = 0 ; i<length; i++){
            if(isDigit(name[i])){
                document.getElementById('errorMsg').innerHTML = 'Your name must not contain number';
                return false;
            }
        }
    }

    //checking email
    mail = document.getElementById('email').value;

    if (!validateEmail(mail)){
        document.getElementById('errorMsg').innerHTML = 'You have entered an invalid email address';
        return (false);
    }
    
    //checking password
    pass = document.getElementById('pass').value;
    //password must be at least 8 characters long
    if(pass.length < 8){
        document.getElementById('errorMsg').innerHTML = 'password must be at least 8 characters long';
        return false;
    }

    //checking address
    address = document.getElementById('address').value;
    var len = address.split(" ").length;
    if (len < 5){
        document.getElementById('errorMsg').innerHTML = 'address must be at least 5 words';
        // alert('address must be at least 5 words');
        return false;
    }

    //check gender
    gender = document.forms["register"]["gender"].value;
    // console.log(gender);
    if(document.forms['register']['gender'].value.length == 0){
        document.getElementById('errorMsg').innerHTML = 'please select your gender';
        // alert('choose one of two');
        return false;
    }

    //skin type
    selected = document.getElementById('stype').value;
    if(selected == ""){
        document.getElementById('errorMsg').innerHTML = 'choose a skin type';
        // alert('choose a type');
        return false;
    }


    //check terms and condition
    if(!document.forms['register']['tnc'].checked){
        document.getElementById('errorMsg').innerHTML = 'you must agree to the terms and conditions';
        // alert('you must agree to the terms and condition');
        return false;
    }


    gender = document.forms["register"]["gender"].value;
    var answer = confirm("Profile:\nName\: " + name + "\nE-mail: " + mail + "\nSkin Type: " + selected + "\nGender: " + gender + "\nAddress: " + address);
    if( answer){
        alert('Your Account Has Been Registered! :D');
    
    }else{
        alert('Registration Cancelled.');
    }
        
    document.forms["register"].reset();
    document.getElementById('stype').value = "none";
    document.getElementById('errorMsg').innerHTML = '';

}

document.getElementById('resetBtn').addEventListener('click', notifyOnReset);
function notifyOnReset(){
    document.getElementById('errorMsg').innerHTML = '';
    alert('Form has been resetted');
}


