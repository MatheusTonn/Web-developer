const inputs = document.getElementsByClassName("inputs")
const spans = document.getElementsByClassName("spans")
const form = document.getElementById("formulario")
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    validName()
    validEmail()
    validPhone()
    validPassword()
    validConfirmPassword()
})

function error(index) {
    spans[index].style.display = "block"
    inputs[index].style.border = "2px solid #f00"
}

function removeError(index) {
    spans[index].style.display = "none"
    inputs[index].style.border = "2px solid #008000"
    inputs[index].style.outline = "none"
}

function validName() {
    if(inputs[0].value.length < 3) {
        error(0)
    } else {
        removeError(0)
    }
}

function validEmail() {
    if(!regex.test(inputs[1].value)) {
        error(1)
    } else {
        removeError(1)
    }
}

function validPhone() {
    if(inputs[2].value.length < 10) {
        error(2)
    } else {
        removeError(2)
    }
}

function validPassword() {
    if(inputs[3].value.length < 8) {
        error(3)
    } else {
        removeError(3)
    }
}

function validConfirmPassword() {
    if(inputs[3].value == inputs[4].value && inputs[4].value >= 8) {
        removeError(4)
    } else {
        error(4)
    }
}