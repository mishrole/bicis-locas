function validateForm(){

	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contra = document.getElementById("input-password");

	var regLetras = /^[a-zA-Z]*$/;
	/*

	if(nombre.value.length == 0){
		alert("Escribe tu nombre")
	}else if(apellido.value.length == 0){
		alert("Escribe tu apellido")
	}

	*/

	if(nombre.value.search(regLetras) || apellido.value.search(regLetras)){
		alert("Ingresa sólo letras");
	}else if(contra.value.length < 6){
		alert("La contraseña debe tener al menos 6 caracteres");
	}else{
		if((contra.value == "password" || contra.value == "123456") || contra.value == "098765"){
			alert("La contraseña no puede ser " + contra.value)
		}
	}





}