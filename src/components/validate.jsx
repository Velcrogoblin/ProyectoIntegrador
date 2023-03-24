const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPass = /^(?=.*[a-z])(?=.*[0-9])/;

export const validate = (inputs) => {
    const errors = {}
    if (!regexEmail.test(inputs.userName)) {
        errors.userName = "Debe ser un Email"
    }
    if (!inputs.userName) {
        errors.userName = "No puede estar vacio"
    }
    if (inputs.userName.length > 35) {
        errors.userName = "Debe tener menos de 35 caracteres"
    }
    if (!regexPass.test(inputs.password)) {
        errors.password = "Debe contener numeros"
    }
    if (inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;
}