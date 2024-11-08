var titulo = document.querySelector('.titulo');
titulo.textContent = "Nícolas Nutrição";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {  // Corrigido para percorrer todos os pacientes
  console.log(pacientes[i]);

  var tdPeso = pacientes[i].querySelector('.info-peso');
  var peso = parseFloat(tdPeso.textContent); // Conversão para número

  var tdAltura = pacientes[i].querySelector('.info-altura');
  var altura = parseFloat(tdAltura.textContent); // Conversão para número

  var tdImc = pacientes[i].querySelector('.info-imc');

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    tdImc.textContent = 'Peso inválido';
    pacientes[i].classList.add('dado-invalido');
  }

  if (!alturaValida) {
    tdImc.textContent = 'Altura inválida';
    pacientes[i].classList.add('dado-invalido');
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  return peso > 0 && peso < 600;
}

function validaAltura(altura) {
  return altura > 0 && altura < 2.80;
}
