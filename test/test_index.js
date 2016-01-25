const assert = require('chai').assert;

const indexModule = require('../index.js');

describe('index.js', function () {
    describe('spiral', function () {
        it('Should output middle first', function () {
            assert.deepEqual(indexModule.spiral(5)[0], [2, 2]);
            assert.deepEqual(indexModule.spiral(101)[0], [50, 50]);
        });
        it('Should output all correct', function () {
            assert.deepEqual(indexModule.spiral(3), [
                [1, 1],
                [1, 0],
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2],
                [2, 2],
                [2, 1],
                [2, 0]
            ]);
        });
    });
});
