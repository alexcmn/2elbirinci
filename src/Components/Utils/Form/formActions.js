export const validate = (element, formdata = []) => {
    let error = [true, ''];

    // if (element.value.trim().length <= element.validation.minLength) {
    //     const message = `${t('errors.min', { name: t(element.config.label), numb: element.validation.minLength })}`;
    //     error = [false, message]
    // }

    // if (element.value.trim().length >= element.validation.maxLength) {
    //     const message = 'You have entered ';
    //     error = [false, message]
    // }

    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = 'Email is not valid';
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.confirm) {
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = 'Passwords do not match';
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = 'This field is required';
        error = !valid ? [valid, message] : error;
    }

    return error;
}

export const update = (element, formdata) => {
    const newFormdata = {
        ...formdata
    }
    const newElement = {
        ...newFormdata[element.id]
    }

    newElement.value = element.event.target.value;

    if (element.blur) {
        let validData = validate(newElement, formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    return newFormdata;
}

export const generateData = (formdata) => {
    let dataToSubmit = [];
    // let field = {};

    for (let key in formdata) {
        // dataToSubmit[key] = formdata[key].value;
        dataToSubmit[key] = {
            code: formdata[key].config.name,
            valueStr: formdata[key].value,
            dataType: formdata[key].dataType,
        }

    }

    return dataToSubmit;
}

export const isFormValid = (formdata) => {
    let formIsValid = true;

    for (let key in formdata) {
        formIsValid = formdata[key].valid && formIsValid
        if (formdata[key].value === '') {
            formIsValid = false;
        }
    }

    return formIsValid;
}