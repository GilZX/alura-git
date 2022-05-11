let input=document.querySelector("#filtrar-pacientes")

input.addEventListener('input',function(){
    let pacientes=document.querySelectorAll('.paciente')

    for(let i=0;i<pacientes.length; i++){
        let pasciente=pacientes[i]
        let nombre=pasciente.querySelector('.info-nombre')
        let value=nombre.textContent.toLowerCase()
        if (value.startsWith(this.value.toLowerCase())){ 
            pasciente.classList.remove('Ocultar-Registros')    
            console.log(nombre.textContent)
        }else{
            pasciente.classList.add('Ocultar-Registros')
        }
    }

})

