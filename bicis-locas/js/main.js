function validateForm(){

	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contra = document.getElementById("input-password");

	var regLetras = /^[a-zA-Z]*$/;
	var regNumeros;
	/*

	if(nombre.value.length == 0){
		alert("Escribe tu nombre")
	}else if(apellido.value.length == 0){
		alert("Escribe tu apellido")
	}

	*/

	if(nombre.value.search(regLetras) || apellido.value.search(regLetras)){
		alert("Ingresa sólo letras");
	}

	if(contra.value.length < 6){
		alert("La contraseña debe tener al menos 6 caracteres");
	}





}