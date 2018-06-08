const Nightmare = require('nightmare')
const expect = require('chai').expect

describe('Load a Page', function () {
    this.timeout('5s')

    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare()
    })

    describe('/ (Home Page)', () => {
        it('should load without error', done => {
            nightmare
                .goto('https://www.bbc.co.uk/')
                .title()
                .end()
                .then((title) => {
                    expect(title).to.equal('BBC - Home')
                    done();
                })
                .catch(done)
        })
    })
})