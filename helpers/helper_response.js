const responseBody = (statusCode, message, data={}) => {
    if (statusCode!=200){
        console.log(data);
    }
    return Object.assign(data, {
        statusCode: statusCode,
        message: message
    })
}

const response200 = (data) => responseBody(200, "success", {data: data});
const response404 = (data) => responseBody(404, "not found", {data: data});

module.exports = { responseBody, response200, response404 };