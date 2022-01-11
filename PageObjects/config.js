function environmentSwitcher(env){
    switch(env.toLowerCase()){
        case 'dev': return `https://answerconnect-dev.psdidevenvs.com/app/acr/home`;
        case 'qa': return `https://answerconnect-qa.psdidevenvs.com/app/acr/home/federal`;
        case 'stg': return `https://answerconnect.stg.cch.com/app/acr/home/federal`;
        case 'prod': return `https://answerconnect.cch.com/app/acr/home/federal`;
        default: return `https://answerconnect-dev.psdidevenvs.com/app/acr/home`;
    }
}