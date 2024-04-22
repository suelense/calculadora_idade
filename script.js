function validarVazio(campo) {
    var data = document.getElementById(campo);
    if (data.value == "") {
        document.getElementsByClassName("erro_vazio_" + campo)[0].style.display = "block";
        document.getElementById(campo).style.borderColor = "#ff5757";
        document.getElementById("label_" + campo).style.color = "#ff5757";
    }
    else {
        document.getElementsByClassName("erro_vazio_" + campo)[0].style.display = "none";
        document.getElementById(campo).style.borderColor = "#716f6f";
        document.getElementById("label_" + campo).style.color = "#716f6f";
    }
}

function validarMes31Dias(dia) {
    if (dia < 0 || dia > 31) {
        document.getElementsByClassName("erro_validar_dia")[0].style.display = "block";
        document.getElementById("dia").style.borderColor = "#ff5757";
        document.getElementById("label_dia").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("erro_validar_dia")[0].style.display = "none";
    }
}

function validarMes30Dias(dia) {
    if (dia < 0 || dia > 30) {
        document.getElementsByClassName("erro_validar_dia")[0].style.display = "block";
        document.getElementById("dia").style.borderColor = "#ff5757";
        document.getElementById("label_dia").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("erro_validar_dia")[0].style.display = "none";
    }

}

function validarMesFevereiro(dia) {
    if (dia < 0 || dia > 29) {
        document.getElementsByClassName("erro_validar_dia")[0].style.display = "block";
        document.getElementById("dia").style.borderColor = "#ff5757";
        document.getElementById("label_dia").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("erro_validar_dia")[0].style.display = "none";
    }
}

function validarDia() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var meses31 = [1, 3, 5, 7, 8, 10, 12];
    if (meses31.includes(mes)) {
        validarMes31Dias(dia);
    } else if (mes == 2) {
        validarMesFevereiro(dia);
    } else {
        validarMes30Dias(dia);
    }
}

function validarMes() {
    var mes = document.getElementById("mes");
    if (mes.value < 0 || mes.value > 12) {
        document.getElementsByClassName("erro_validar_mes")[0].style.display = "block";
        document.getElementById("mes").style.borderColor = "#ff5757";
        document.getElementById("label_mes").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("erro_validar_mes")[0].style.display = "none";
    }
}

function validarAnoFuturo() {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var ano = document.getElementById("ano");
    if (ano.value > anoAtual) {
        document.getElementsByClassName("erro_validar_ano")[0].style.display = "block";
    } else {
        document.getElementsByClassName("erro_validar_ano")[0].style.display = "none";
    }
}



function validarData() {
    validarVazio("dia");
    validarVazio("mes");
    validarVazio("ano");
    validarDia();
    validarMes();
    validarAnoFuturo();
}

function calcularIdade() {
    validarData();
}
