let tablaPacientes=document.querySelector("#tabla-pacientes")

tablaPacientes.addEventListener("dblclick",function(event){
    //alert("Eliminando Paciente");
    event.target.parentNode.classList.add("efecto-eliminar");
    setTimeout( function(){event.target.parentNode.remove()},500);

})


