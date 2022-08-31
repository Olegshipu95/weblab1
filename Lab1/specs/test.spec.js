const {data_clear, isYOk, errorCheck, fieldsAreNotEmpty} = require('../js/main.js')
let chai = require("chai");
let expect = chai.expect;
let sinon = require("sinon");
describe("test suit", function (){
    it("Test the spy calledOnce",function (){
        let spy = sinon.spy(isYOk());
        data_clear();
        expect(spy.calledOnce).to.be.true;
    })
})