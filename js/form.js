var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

  var paciente = obtemPacienteDoFormulario(form);



var pacienteTr = montaTr(pacienteTr);

var erros = validaPaciente(paciente);

if (erro.length > 0){
exibeErros(erros);
  return;
}
    

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    
    form.reset();
});


function exibeErros(erros){
  var ul = document.querySelector("#mensagens-erro");
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form){

var paciente = {
 nome : form.nome.value,
 altura : form.altura.value,
 peso : form.peso.value,
 gordura : form.gordura.value,
 imc: calculaImc(form.peso.value, form.altura.value)
};

return paciente;
}

function montaTr(paciente){
  
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  



pesoTd.textContent = paciente.peso;
alturaTd.textContent = paciente.altura;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = calculaImc(paciente.peso, paciente.altura);

pacienteTr.appendChild(montaTd(paciente.nome , "info-nome"));
pacienteTr.appendChild(montaTd(paciente.peso , "info-peso"));
pacienteTr.appendChild(montaTd(paciente.altura , "info-altura"));
pacienteTr.appendChild(montaTd(paciente.gordura , "info-gordura"));
pacienteTr.appendChild(montaTd(paciente.imc , "info-imc"));

return pacienteTr;
}



function montaTd(dado, classe){
  var td = documen.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  
  return td;
}

function validaPaciente(paciente){
var erros = [];

if (!validaPeso(paciente.peso)){
  erros.push("Peso inválido!")
}
return erros;
}
