let chai = require('chai');
let chaiHttp = require('chai-http');
let { server, mongoose } = require('../server');
var should = chai.should();
chai.use(chaiHttp);

describe('User Module', () => {
    let user_url = "/api/user";

    // Collection drop
    before((done) => {
        mongoose.connection.collections.users.drop(() => {
            done();
        });
    });

    // Post API
    describe('/POST', () => {
        it('it should Create a user', (done) => {
            const data = {
                userName: "tamilselvan",
                password: "123456",
                location: "coimbatore",
                workType: "developer"
            };
            chai.request(server).post(user_url).send(data).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Get API
    describe('/GET', () => {
        it('it should GET all the users', (done) => {
            chai.request(server).get(user_url).end((err, res) => {
                res.should.have.status(200);
                res.body.results.should.be.a('array');
                done();
            });
        });
    });

    // Update API
    describe('/Update', () => {
        it('it should UPDATE a user', (done) => {
            const data = {
                location: "cbe",
                workType: "developer"
            };
            chai.request(server).patch(user_url + '?userName=' + "tamilselvan").send(data).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Delete API
    describe('/Delete', () => {
        it('it should DELETE a user', (done) => {
            chai.request(server).delete(user_url + '?userName=' + "tamilselvan").end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });


});