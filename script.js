
    function submit(){
        let name = document.getElementById("fname")
        let adress = document.getElementById("fadress")
        let email = document.getElementById("femail")
        let password = document.getElementById("fpswd")
        let comment = document.getElementById("fcomment")
        var numbers = /[0-9]/g;  
        var upperCaseLetters = /[A-Z]/g;
        var lowerCaseLetters = /[a-z]/g;
        if(name.value =="") {
             alert("you have an empty champ")
         } else if( (adress.value=="")) {
             alert("adress invalid")
         } else if( (email.value=="") || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            alert("email invalid")
        } else if( (password.value=="") || (password.value.length < 8) || !(password.value.match(numbers)) || !(password.value.match(lowerCaseLetters)) || !(password.value.match(upperCaseLetters)) ) {
            alert("password invalid") 
        }else if( (comment.value=="")) {
            alert("comment invalid")
        }

    }
    function reset(){
        document.getElementById("fname").value=""
        document.getElementById("fadress").value=""
        document.getElementById("femail").value=""
        document.getElementById("fpswd").value=""
        document.getElementById("fcomment").value=""
        
    }

