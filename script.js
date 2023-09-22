let green="rgb(172, 255, 172)";
let red= "rgb(255, 164, 164)";
let allTrue=false;
function validate(){
    let pass=document.getElementById("password");
    let len=document.getElementById("length");
    let upper=document.getElementById("upper");
    let lower=document.getElementById("lower");
    let specialChar=document.getElementById("specialChar");
    let num=document.getElementById("number");
    if(pass.value.match(/[0-9]/)){
        num.style.color="green";
        allTrue=true;
    }
    else{
        num.style.color=`${red}`;
        allTrue=false;
    }


    if(pass.value.match(/[A-Z]/)){
        upper.style.color="green";
        allTrue=true;
    }
    else{
        upper.style.color=`${red}`;
        allTrue=false;
    }


    if(pass.value.match(/[a-z]/)){
        lower.style.color="green";
        allTrue=true;
    }
    else{
        lower.style.color=`${red}`;
        allTrue=false;
    }


    if(pass.value.match(/[!@#$%^&*()_<>?{:"}~,.;'/]/)){
        specialChar.style.color="green";
        allTrue=true;
    }
    else{
        specialChar.style.color=`${red}`;
        allTrue=false;
    }

    if(pass.value.length>8){
        len.style.color="green";
        allTrue=true;
    }
    else{
        len.style.color=`${red}`;
        allTrue=false;
    }
    console.log(allTrue);
    if(allTrue){
        pass.style.background="rgb(172, 255, 172)";
    }
    else{
        pass.style.background="rgb(255, 164, 164)";
    }

}
function conform(){
    let pass1=document.getElementById("password");
    let pass2=document.getElementById("password2");
    let msg=document.getElementById("message2");
    if(pass1.value !== pass2.value){
        pass2.style.background="rgb(255, 164, 164)";
        msg.innerHTML="*Password doesn't match";
        msg.style.color="rgb(255, 164, 164)";
        allTrue=false;
    }
    else{
        pass2.style.background="rgb(172, 255, 172)";
        msg.innerHTML="";
        allTrue=true;
    }
}
let form=document.getElementById("myForm");
form.addEventListener("submit",(e)=>{
    if(allTrue==false){
        e.preventDefault();
        alert("Password does not match! please try again.")
    }
});