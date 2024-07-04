const fs = require('fs')

// check api key
function checkAPIKey() {
    return (req, res, next) => {
        if(req.headers.x_api_key !== 'thisisapikey')
            return res.json({ msg: 'Invalid API key'})
        next()
    }
}

// create a log file
function logRequestResponse(filename) {
    return (req, res, next) => {
        const log = `${Date.now()}: ${req.path} ${req.method} - ip: ${req.ip}\n`
        fs.appendFile(filename, log, (err, data) => {
            next()
        })
    }
}

module.exports = { checkAPIKey, logRequestResponse }