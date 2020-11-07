
const validateRequest = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) {
        return error.details[0].message;
    }
    return null;
}


module.exports = { validateRequest };