var input = document.querySelector("#filtrar-nome");

input.addEventListener("input", function(){
    let continuarAhPesquisar = input.value;
    let pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente){

       if(continuarAhPesquisar.length >0){
            let nome = paciente.querySelector(".info-nome").textContent;
            let expressao = new RegExp(continuarAhPesquisar, "i");
            if(expressao.test(nome)){
                paciente.classList.remove("invisivel");
            }else{
                paciente.classList.add("invisivel");
            }
        }else{
            paciente.classList.remove("invisivel");
        }
    });

});
