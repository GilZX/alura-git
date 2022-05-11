
let boton=document.getElementById("adicionar-paciente");
boton.addEventListener('click',adicionar)


function calcularImc(peso,altura){


    if((peso>0 && peso<600) && (altura>0 && altura<3)){
        let imc=peso/(altura*altura);
        imc=Math.round(imc);
        return imc;
    }   
    else{

        if(peso<=0 || peso>=300){
            return "Peso Incorrecto"
        }else if(altura<=0 || altura>3){
            return "Altura Incorrecta"
        }
        
        return "Calculo IMC Incorrecto"
    }



}

function adicionar(event){

    event.preventDefault()
   
    let formulario=document.getElementById("Form-Adisionar");
    let pasiente=capturarDatosPasiente(formulario);
    if(pasiente.nombre==''|| pasiente.altura==''||pasiente.indice==''||pasiente.peso==''){
        alert("Especificar todos los campos para realizar el calculo")
    }else{

        if(validarPaciente(pasiente)){
            añadirPaciente(pasiente)
            formulario.reset();
        }
        
    }
   

}


function añadirPaciente(pasiente){
    let tabla=document.getElementById('tabla-pacientes');  
    let tr=crearTr(pasiente);
    tabla.appendChild(tr);
}

function crearTr(pasiente){
    let tr=document.createElement("tr");
    tr.classList.add("paciente");
    let alturatd=crearTd(pasiente.altura,'info-altura');
    let nombretd=crearTd(pasiente.nombre,'info-nombre');
    let pesotd=crearTd(pasiente.peso,'info-peso');
    let imctd=crearTd(pasiente.imc,'info-imc');
    let indicetd=crearTd(pasiente.indice,'info-gordura');



    tr.appendChild(nombretd);
    tr.appendChild(pesotd);
    tr.appendChild(alturatd);
    tr.appendChild(indicetd);
    tr.appendChild(imctd);

    return tr;
}


function crearTd(dato,clase){

    let td=document.createElement("td");
    td.classList.add(clase);
    td.textContent=dato;
    return td;


}

function validarPaciente(pasiente){
    if(pasiente.peso<=0 || pasiente.peso>=300){

        return false
    }else if(pasiente.altura<=0 || pasiente.altura>3){
        return false
    }

    return true
}

function capturarDatosPasiente(form){

    let paciente={
     nombre:form.nombre.value,
     peso:form.peso.value,
     altura:form.altura.value,
     indice:form.gordura.value,
     imc:calcularImc(form.peso.value,form.altura.value)
    }
    return paciente;
    
}









