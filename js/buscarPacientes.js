let buscar=document.getElementById("buscar-pasientes");

buscar.addEventListener('click',function(){
    console.log("Hola Mundo")
    var xmlRequest=new XMLHttpRequest
    xmlRequest.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json")
    xmlRequest.addEventListener('load',function(){
        let salida=xmlRequest.responseText
        let pacientes=JSON.parse(salida)

        for(let p in pacientes){
           añadirPaciente(pacientes[p])
        }



    })
    xmlRequest.send()

})









