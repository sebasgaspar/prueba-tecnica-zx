"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = require("../resolvers");
const typeDefs = `
    type Query {
        countrySuggestion (q:String!): [Country]
    }

    type Country {
        name:String
        latitude:String
        longitude:String
        score:Float
    }

`;
exports.default = (0, graphql_tools_1.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: resolvers_1.countryResolve
});
