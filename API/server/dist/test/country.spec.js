"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const supertest_1 = __importDefault(require("supertest"));
const assert_1 = __importDefault(require("assert"));
const test = (0, supertest_1.default)(app_1.app);
describe("COUNTRY", function () {
    describe("SEARCH SUGGESTION COUNTRY", function () {
        it('SEARCH COUNTRY', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield test.get("/api/search?q=lon");
                assert_1.default.strictEqual(result.status, 200);
            });
        });
        it('SEARCH COUNTRY EMPTY', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield test.get("/api/search?q=SomeRandomCityInTheMiddleOfNowhere");
                assert_1.default.strictEqual(result.status, 200);
                let lengthSearch = result.body.search.length;
                assert_1.default.strictEqual(lengthSearch, 0);
            });
        });
    });
});
