const success = (response, message, status = 200) => { 
    return response.send(message)
};

export default success;