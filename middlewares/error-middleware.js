import ErrorApi from '../exceptions/error-api.js'

export default function(err, req, res, next) {
    console.log(err)
    if (err instanceof ErrorApi) {
        res.status(err.status).json({ message: err.message, errors: err.errors })
    }
    res.status(500).json({ message: 'Server error' })
}