const Nightmare = require('nightmare')
const expect = require('chai').expect
const obj = require('../utils/page_objects')

describe('Mobile Emulation', function () {
    this.timeout('5s')

    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare({
            show: false
        })
    })

    describe('/ (Home Page)', () => {
        it('viewport set to iPhone X dimensions', done => {
            nightmare
            //.viewport(375,812)
                .goto(obj.baseURL)
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