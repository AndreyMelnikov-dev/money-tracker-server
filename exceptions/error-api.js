class ErrorApi extends Error {
    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnauthorizedError() {
        return new ErrorApi(401, 'User Not Authorized')
    }

    static BadRequest(message, errors = []) {
        return new ErrorApi(400, message, errors)
    }

    static NotFound(){
        return new ErrorApi(404, 'Nothing Found')
    }
}

export default ErrorApi