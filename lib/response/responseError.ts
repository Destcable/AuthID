const responseError = (status, message) => { 
    return ({ "status": status ,'message': message});
};

export default responseError;