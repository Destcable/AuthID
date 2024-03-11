import error from "../lib/response/error";
import success from "../lib/response/success";
import registerValidate from "../validators/auth/registerValidate";

const registerUser = (req, res) => { 
    const validate = registerValidate(req.body);
    
    if (validate) { 
        return error(res, validate);
    }

    return success(res, 'Hello!');
};

export { 
    registerUser
};