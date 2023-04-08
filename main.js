function validate(){

    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var msg = document.getElementById("msg");

    if (name=="" && mail=="" && password=="" && confirm==""){
    
        msg.innerHTML = "Please Enter Data";
        msg.style.transition="all 1s ease";
        msg.style.display="block";
       
        return false;
        
    }else if (name.length<8 || name.length>15) {

        msg.innerHTML = "Please Insert 8-15 character or more In Username";

        return false;

    }else if (mail.indexOf("@")=="-1"){

        console.log("hi");

        msg.innerHTML = "Please Enter Valid E-mail";

        return false;
    }else if (password.length<=8){

        msg.innerHTML = "Please Enter At Least 8-15 character In Password";

        return false;
    } else if (password != confirm){

        
        msg.innerHTML = "Please Matched Password";

        return false;
    } else {
        return true;
    }

}

// validate ();



