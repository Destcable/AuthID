import validator from "../../lib/validator/validator";

const registerValidate = (body) => { 
    const fields = [
        'name', 
        'surname'
    ];
    return validator(fields, body);
};

export default registerValidate;