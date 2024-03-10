import responseError from "../lib/response/responseError";
import registerValidate from "../validators/auth/registerValidate";

const registerUser = (req, res) => { 
    const validate = registerValidate(req.body);
    
    if (validate) { 
        return res.send(responseError(404, validate));
    }

    return res.send(`Hello!`);
};

export { 
    registerUser
};