import registerValidate from "../validators/auth/registerValidate";

const registerUser = (req, res) => { 
    const validate = registerValidate(req.body);
    
    if (validate) { 
        return res.send(validate);
    }

    res.send(`Hello!`);
};

export { 
    registerUser
};