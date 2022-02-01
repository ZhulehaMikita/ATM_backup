const chai = require('chai');
const expect = chai.expect;
const options = require('../data/options.json');
const request = require('request-promise-native');

describe('Get method verification', () => {

    before(async () => {
        response = await request(options);
    });
    
    it('Verifying status code', () => {
        expect(response.statusCode).to.eql(200);
    });
    
    it('Verifying content-type header', () => {
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');
    });

    it('Verifying amount of users', () => {
        let count = 0;
        for(let element of response.body){
            if(element.id) count ++
        };
        expect(count).to.eql(10);
    });
    
});
    
   