const messageError = (status, message) => { 
    return ({ "status": status ,'message': message});
};

export default messageError;