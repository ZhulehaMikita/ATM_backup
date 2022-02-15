const Homepage = require('./HomePage');
const InterTopicsPage = require('./InterTopicsPage')
const SRL = require('./SRL')

class Pages {
    constructor(){
        this.homepage = new Homepage ();
        this.interTopicsPage = new InterTopicsPage ();
        this.srl = new SRL ();
    }
}

module.exports = new Pages (); 
