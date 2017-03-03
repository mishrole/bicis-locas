function validateForm(){

	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contra = document.getElementById("input-password");
	var eleccion = document.getElementById("opciones")
	var eleccionVacia = eleccion.options[eleccion.selectedIndex].value

	var regLetras = /^[a-zA-Z]*$/;

	//Campos obligatorios

	if(nombre.value.length == 0){
		alert("Escribe un nombre")
	}else if(apellido.value.length == 0){
		alert("Escribe un apellido")
	}else if(correo.value.length == 0){
		alert("Escribe un e-mail")
	}else if(contra.value.length == 0){
		alert("Escribe una contraseña")
	}

	if(eleccionVacia == "0"){
		alert("Seleccione una opción")
	}

	//Campos válidos

	if(nombre.value.search(regLetras) || apellido.value.search(regLetras)){
		alert("Ingresa sólo letras");
	}else if(contra.value.length > 1 && contra.value.length < 6){
		alert("La contraseña debe tener al menos 6 caracteres");
	}else{
		if((contra.value == "password" || contra.value == "123456") || contra.value == "098765"){
			alert("La contraseña no puede ser " + contra.value)
		}
	}





}