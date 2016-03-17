const chai = require('chai');
chai.use(require('chai-http'));

var request = chai.request;
var expect = chai.expect;

describe('species router testing', () => {

  var cedrusDeodaraID;

  it('should post species cedrus deodara', (done) => {
    request('localhost:3000')
    .post('/speciess')
    .send({"genus":"cedrus", "species":"deodara", "cmnName":"deodar cedar"})
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      cedrusDeodaraID = res.body._id;
      done();
    });
  });

  it('should get all speciess', (done) => {
    request('localhost:3000')
    .get('/speciess')
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      done();
    });
  });

  it('should get speciess cedrus deodara created in prior post', (done) => {
    request('localhost:3000')
    .get('/speciess/'+cedrusDeodaraID)
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      expect(res.body.genus).eql('cedrus');
      done();
    });
  });



});
