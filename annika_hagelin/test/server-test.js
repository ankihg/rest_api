'use strict';
const chai = require('chai');
chai.use(require('chai-http'));

var request = chai.request;
var expect = chai.expect;

var mongoose = require('mongoose');
let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

describe('server testing', () => {

  var cedrusDeodaraID;
  var cedrusAtlanticaID;
  var memusDeletaID;
  var livermoriumLawrenceID;
  var plzusRespondaID;

  describe('speciess resource testing', () => {

    it('should post species cedrus deodara', (done) => {
      request('localhost:3000')
      .post('/speciess')
      .send({"genus":"cedrus", "species":"deodara", "cmnName":"deodar cedar"})
      .end((err, res) => {
        expect(err).eql(null);
        expect(res).status(200);
        expect(res.body._id).not.eql(null);
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
        expect(res.body._id).not.eql(null);
        livermoriumLawrenceID = res.body._id;
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
        expect(res.body._id).not.eql(null);
        plzusRespondaID = res.body._id;
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
        expect(res.body._id).not.eql(null);
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
        expect(res.body._id).not.eql(null);
        done();
      });
    });


    it('should put hildius tadica to plzus repsonda', (done) => {
      request('localhost:3000')
      .put('/speciess/'+plzusRespondaID)
      .send({"genus":"hildius", "species":"tadica", "cmnName":"tad hilda"})
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

  describe('trees resource testing', () => {

    var cedrusDeodara_55_15ID;

    it('should post cedrus deodara at lat:55 lng:12', (done) => {
      request('localhost:3000')
      .post('/trees')
      .send({"species":cedrusDeodaraID, "lat":55, "lng":12})
      .end((err, res) => {
        expect(err).eql(null);
        expect(res).status(200);
        expect(res.body._id).not.eql(null);
        cedrusDeodara_55_15ID = res.body._id;
        done();
      });
    });

    it('should get cedrus deodara at lat:55 lng:12 by id', (done) => {
      request('localhost:3000')
      .get('/trees/'+cedrusDeodara_55_15ID)
      .end((err, res) => {
        expect(err).eql(null);
        expect(res).status(200);
        expect(res.body._id).not.eql(null);
        done();
      });
    });

  });

  after((done) => {
    mongoose.connection.db.dropDatabase((err) => {
      console.log('database dropped');
      done();
    });
  });
});
