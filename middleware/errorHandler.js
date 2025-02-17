const { constants } = require('../constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? 500 : res.statusCode;
    switch (statusCode) {
        case constants.VALIDATION_FAILED:
            res.json({title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message: err.message, stackTrace: err.stack});
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized", message: err.message, stackTrace: err.stack});
        case constants.SERVER_ERROR:
            res.json({title: "Server Error", message: err.message, stackTrace: err.stack});
        default:
            break;
    }
    // res.json({title: "Not Found", message: err.message, stackTrace: err.stack })
    // res.json({title: "Validation Failed", message: err.message, stackTrace: err.stack })
};

module.exports = errorHandler;