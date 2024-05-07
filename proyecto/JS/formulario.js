const $submit = document.getElementById("submit"),
      $email = document.getElementById("email"),
      $password = document.getElementById("password"),
      $nombre =document.getElementById("nombre"),
      $LogEmail = document.getElementById("LogEmail"),
      $LogPassword = document.getElementById("LogPassword"),
      $LogSubmit = document.getElementById("LogSubmit");

function validateInputs(){
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordRegex = /^.{8,20}$/;
    const nombreRegex= /^.{4,60}$/;

    if($nombre.value == ""){
        alert("No dejar el campo nombre vacio");
    }
    if($email.value == ""){
        alert("No dejar el campo email vacio");
    }
    if($password.value == ""){
        alert("No dejar el campo contraseña vacio");
    }
    if(!nombreRegex.test($nombre.value)){
        alert("Ingrese el formato correcto en el nombre");
        $nombre.style.border = "1px solid red";

    }
    if(!emailRegex.test($email.value)){
        alert("Ingrese el formato correcto en el email: example@email.com");
        $email.style.border = "1px solid red";
    }
    if(!passwordRegex.test($password.value)){
        alert("La contraseña debe tener minimo 8 caracteres");
        $password.style.border = "1px solid red";
    }
}

function validateLogInputs(){
    const LogEmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const LogPasswordRegex = /^.{8,20}$/;
    if($LogEmail.value == ""){
        alert("No dejar el campo email vacio");
    }
    if($LogPassword.value == ""){
        alert("No dejar el campo contraseña vacio");
    }
    if(!LogEmailRegex.test($LogEmail.value)){
        alert("Ingrese el formato correcto en el email: example@email.com");
        $LogEmail.style.border = "1px solid red";
    }
    if(!LogPasswordRegex.test($LogPassword.value)){
        alert("La contraseña debe tener minimo 8 caracteres");
        $LogPassword.style.border = "1px solid red";
    }
}


document.addEventListener("click", (e) => {
    if(e.target === $submit){
        e.preventDefault();
        validateInputs();
    }
});

document.addEventListener("click", (e) => {
    if(e.target === $LogSubmit){
        e.preventDefault();
        validateLogInputs();
    }
});