const validation = (userData) => {
    let errors = {};

    if (!/\S+@\S+\.\S+/.test(userData.username)){
        errors.username = "El email es invalido";
    }
    if (!userData.username){
        errors.username = "Este campo no puede estar en blanco";
    }
    if (userData.username.length > 35){
        errors.userdata = "Este campo no puede ser mayor a 35 caracteres";
    }
    if (!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un número";
    }
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    return errors;
}

export default validation;