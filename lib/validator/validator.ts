const validator = (fields,body) => { 
    let errors = [];
    
    fields.forEach(field => {
        if (!body[field]) { 
            errors.push(`${field} : Параметр отсутствует`);
        }
    });

    return errors.length >= 1 ? errors : false;
};

export default validator;