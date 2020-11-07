const jwt = require('jsonwebtoken');
const { responseBody } = require('./helper_response');



const verifyToken = (req, res, next) => {
    // CALLED TO VERIFY API REQUESTS
    
    const token = req.header('Authorization');
    if (!token) return responseBody(res, 401, "Access denied");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return responseBody(res, 400, "Invalid token");
    }
}


module.exports = { verifyToken };