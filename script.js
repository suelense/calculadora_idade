function getValue(id) {
    //obtém o valor digitado no input
    return document.getElementById(id).value;
}

function changeCss(className, attribute, value) {
    //função que altera atributos no Css
    document.getElementsByClassName(className)[0].style[attribute] = value;
}

function normalBoxAttributes(messageClass, inputClass, lableClass) {
    //retorna a formatação original
    changeCss(messageClass, "display", "none");
    changeCss(inputClass, "borderColor", "#716f6f");
    changeCss(lableClass, "color", "#716f6f")
}

function errorBoxAttributes(messageClass, inputClass, lableClass) {
    //altera a formatação quando há um erro nos dados digitados
    changeCss(messageClass, "display", "block");
    changeCss(inputClass, "borderColor", "#ff5757");
    changeCss(lableClass, "color", "#ff5757")
}

function validateEmpty(id) {
    var date = getValue(id);
    if (isNaN(date) || date == 0) {
        //verifica se o input está vazio
        errorBoxAttributes("error_empty_" + id, id, "label_" + id)
        return false;
    }
    else {
        normalBoxAttributes("error_empty_" + id, id, "label_" + id);
        return true;
    }
}

function validateDaysOfMonths(expression) {
    if (expression) {
        //valida se o dia existe de acordo com a expressão
        errorBoxAttributes("error_validate_day", "day", "label_day");
        return false;
    } else {
        normalBoxAttributes("error_validate_day", "day", "label_day");
        return true;
    }
}

function validateDay() {
    var day = getValue("day");
    var month = getValue("month");
    var year = getValue("year");
    var months31 = [1, 3, 5, 7, 8, 10, 12];
    if (months31.includes(month)) {
        //valida meses com 31 dias
        return validateDaysOfMonths(day < 0 || day > 31);
    } else if (month == 2) {
        //valida o mês de fevereiro
        if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)) {
            return validateDaysOfMonths(day < 0 || day > 29);
        } else {
            return validateDaysOfMonths(day < 0 || day > 28);
        }
    } else {
        //valida meses com 30 dias
        return validateDaysOfMonths(day < 0 || day > 30);
    }
}

function validateMonth() {
    var month = getValue("month");
    if (month < 1 || month > 12) {
        //valida se o mês existe
        errorBoxAttributes("error_validate_month", "month", "label_month");
        return false;
    } else {
        normalBoxAttributes("error_validate_month", "month", "label_month");
        return true;
    }
}

function validateFutureYear() {
    var year = getValue("year");
    var actualDate = new Date();
    var actualYear = actualDate.getFullYear();
    if (year > actualYear) {
        //valida se o ano é anterior ou igual o atual
        errorBoxAttributes("error_validate_year", "year", "label_year");
        return false;
    } else {
        normalBoxAttributes("error_validate_year", "year", "label_year");
        return true;
    }
}

function validateDate() {
    //executa todas as validações de data
    validateEmpty("day");
    validateEmpty("month");
    validateEmpty("year");
    if (validateEmpty("day") && validateEmpty("month") && validateEmpty("year")) {
        validateDay();
        validateMonth();
        validateFutureYear();
        if (validateDay() && validateMonth() && validateFutureYear()) {
            return true;
        } else {
            return false;
        }
    }
}

function calculateAge() {
    var day = getValue("day");
    var month = getValue("month");
    var year = getValue("year");
    var birthday = new Date(year, month - 1, day)
    var actualDate = new Date();
    //diferença de datas em milisegundos
    var msDiference = actualDate.getTime() - birthday.getTime();
    if (msDiference >= 0) {
        var msYear = 31556952000; //milisegundos por ano
        var msMonth = 2628000000; //milisegundos por mês
        var msDay = 86400000; //milisegundos por dia
        //calcula a idade
        var ageYear = parseInt(msDiference / msYear);
        var ageMonth = parseInt((msDiference - (ageYear * msYear)) / msMonth);
        var ageDay = parseInt((msDiference - (ageYear * msYear) - (ageMonth * msMonth)) / msDay);
        return { ageYear, ageMonth, ageDay };
    } else {
        errorBoxAttributes("error_validate_day", "day", "label_day");
        errorBoxAttributes("error_validate_month", "month", "label_month");
    }
}

function showResult() {
    if (validateDate()) {
        //se as datas forem válidas, calcula a idade
        calculateAge();
        let age = calculateAge();
        //mostra a idade no html
        document.getElementById("answerYear").innerHTML = age.ageYear;
        document.getElementById("answerMonth").innerHTML = age.ageMonth;
        document.getElementById("answerDay").innerHTML = age.ageDay;
    }
}
