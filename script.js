function getValue(id) {
    return parseInt(document.getElementById(id).value)
}

function changeAttribute(className, attribute, value) {
    document.getElementsByClassName(className)[0].style[attribute] = value
}

function displayBlockAndRed(id) {
    changeAttribute("error_empty_" + id, "display", "block");
    changeAttribute(id, "borderColor", "#ff5757");
    changeAttribute("label_" + id, "color","#ff5757");
}

function displayNoneAndGray(id) {
    changeAttribute("error_empty_" + id, "display", "none");
    changeAttribute(id, "borderColor", "#716f6f");
    changeAttribute("label_" + id, "color", "#716f6f");
}

function validateEmpty(id) {
    var date = getValue(id);
    if (isNaN(date)) {
        displayBlockAndRed(id);
    }
    else {
        displayNoneAndGray(id);
        return true;
    }
}

function validate31Days(day) {
    if (day < 0 || day > 31) {
        document.getElementsByClassName("error_validate_day")[0].style.display = "block";
        document.getElementById("day").style.borderColor = "#ff5757";
        document.getElementById("label_day").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("error_validate_day")[0].style.display = "none";
    }
}

function validate30Days(day) {
    if (day < 0 || day > 30) {
        document.getElementsByClassName("error_validate_day")[0].style.display = "block";
        document.getElementById("day").style.borderColor = "#ff5757";
        document.getElementById("label_day").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("error_validate_day")[0].style.display = "none";
    }

}

function validateFebruary(day) {
    if (day < 0 || day > 29) {
        document.getElementsByClassName("error_validate_day")[0].style.display = "block";
        document.getElementById("day").style.borderColor = "#ff5757";
        document.getElementById("label_day").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("error_validate_day")[0].style.display = "none";
    }
}

function validateDay() {
    var day = getValue("day");
    var month = getValue("month");
    var months31 = [1, 3, 5, 7, 8, 10, 12];
    if (months31.includes(month)) {
        validate31Days(day);
    } else if (month == 2) {
        validateFebruary(day);
    } else {
        validate30Days(day);
    }
}

function validateMonth() {
    var month = getValue("month");
    if (month < 0 || month > 12) {
        document.getElementsByClassName("error_validate_month")[0].style.display = "block";
        document.getElementById("month").style.borderColor = "#ff5757";
        document.getElementById("label_month").style.color = "#ff5757";
    } else {
        document.getElementsByClassName("error_validate_month")[0].style.display = "none";
    }
}

function validateFutureYear() {
    var actualDate = new Date();
    var actualYear = actualDate.getFullYear();
    var year = getValue("year");
    if (year > actualYear) {
        document.getElementsByClassName("error_validate_year")[0].style.display = "block";
    } else {
        document.getElementsByClassName("error_validate_year")[0].style.display = "none";
    }
}

function validateDate() {
    validateEmpty("day");
    validateEmpty("month");
    validateEmpty("year");
    validateDay();
    validateMonth();
    validateFutureYear();
}

function calculateAge() {
    validateDate();
}
