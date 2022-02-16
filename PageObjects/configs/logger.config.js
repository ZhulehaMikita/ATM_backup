const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: './combined.log'})
    ],
    format: winston.format.simple()
});

module.exports = logger;