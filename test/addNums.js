const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require('../server')
// Assertion Style
chai.should();
chai.use(chaiHttp);

describe('POST /AddNums API', () => {

  describe('Takes the users input, adds the numbers, sends back the answer to the client', () => {
    it("It should return an object", (done) => {
      chai.request(server)
        .post("/addNums")
        .end((err, res) => {
          res.body.should.be.a('object');
        done();
        })
    })
    it("It should return status 200", (done) => {
      const inputs = {}
      chai.request(server)
        .post("/addNums")
        .send(inputs)
        .end((err, res) => {
          res.should.have.status(200)
        done();
        })
    })
    it("It should have an 'answer' property", (done) => {
      chai.request(server)
        .post("/addNums")
        .end((err, res) => {
          res.body.should.have.property("answer")
        done();
        })
    })
  })
});