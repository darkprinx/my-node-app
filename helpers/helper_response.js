const responseBody = (res, statusCode, message, data={}) => {
    if(statusCode >= 500){
        console.log(data);
    }
    return res.status(statusCode).json(Object.assign({data: data}, {
        statusCode: statusCode,
        message: message
    }));
}

module.exports = { responseBody };