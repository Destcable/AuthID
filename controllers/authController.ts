import { query, validationResult } from 'express-validator';

const registerUser = (req, res) => { 
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.query.person}!`);
    }
  
    res.send({ errors: result.array() });
};

export { 
    registerUser
};