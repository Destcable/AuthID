import messageError from "./message/messageError";

const error = (response, message, status = 404) => { 
    return response.send(messageError(status, message));
};

export default error;