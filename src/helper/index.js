module.exports = {
    response: (res, status, message, data) => {
        const result = {}
        result.status = status || 200
        result.message = message
        result.data = data

        return res.status(result.status).json(result)
    }
}