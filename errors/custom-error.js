class CustomAPIError extends Error{
    constructor (message, statusCode){
        SourceBuffer(message)
        this.statusCode = statusCode
    }
} 
const createCustomError = (msg, statusCode) =>{
    return new CustomAPIError(msg,statusCode)
}

module.exports = {createCustomError, CustomAPIError}