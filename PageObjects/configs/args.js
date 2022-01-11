const options = {
    
    env:{
        type: 'string',
        demandOption: true,
        describe: 'specify your env',
        choices: ['dev', 'stg', 'qa', 'prod'],
        default: 'dev'
    },
    sharedTestFiles: {
        type: 'number',
        demandOption: true,
        default: 2
    },
    maxInstances: {
        type: 'number',
        demandOption: true,
        default: 2
    }
}

module.exports = require('yargs').options(options).strict().argv;