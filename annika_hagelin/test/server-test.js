const chai = require('chai');
chai.use(require('chai-http'));

var request = chai.request;
var expect = chai.expect;

describe('species router testing', () => {

  var cedrusDeodaraID;
  var cedrusAtlanticaID;
  var memusDeletaID;

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

  it('should post species livermorium lawrencia', (done) => {
    request('localhost:3000')
    .post('/speciess')
    .send({"genus":"livermorium", "species":"lawrencia", "cmnName":"lawrence livermore"})
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      cedrusAtlanticaID = res.body._id;
      done();
    });
  });

  it('should post plzus repsonda', (done) => {
    request('localhost:3000')
    .post('/speciess')
    .send({"genus":"plzus", "species":"responda", "cmnName":"respond plz"})
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      done();
    });
  });

  it('should post memus deleta', (done) => {
    request('localhost:3000')
    .post('/speciess')
    .send({"genus":"memus", "species":"deleta", "cmnName":"delete me"})
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      memusDeletaID = res.body._id;
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
      expect(res.body.species).eql('deodara');
      done();
    });
  });


  it('should put cedrus atlantic to plzus repsonda', (done) => {
    request('localhost:3000')
    .put('/speciess/'+cedrusAtlanticaID)
    .send({"genus":"cedrus", "species":"atlantica", "cmnName":"atlas cedar"})
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      done();
    });
  });

  it('should delete memus deleta', (done) => {
    request('localhost:3000')
    .del('/speciess/'+memusDeletaID)
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      done();
    });
  });





});
