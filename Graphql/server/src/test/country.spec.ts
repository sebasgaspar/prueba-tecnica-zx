import { app } from '../app';
import supertest from 'supertest';
import assert from 'assert'
import { expect } from 'chai'

const test = supertest(app);
describe("COUNTRY", function () {
    describe("SEARCH SUGGESTION COUNTRY", function () {
        it('SEARCH COUNTRY', async function () {
            const result = await test.get("/api/search?q=lon")
            assert.strictEqual(result.status, 200)
        });
        it('SEARCH COUNTRY EMPTY', async function () {
            const result = await test.get("/api/search?q=SomeRandomCityInTheMiddleOfNowhere")
            assert.strictEqual(result.status, 200)
            let lengthSearch = result.body.search.length
            assert.strictEqual(lengthSearch, 0);
        });
    })
});
