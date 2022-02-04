import { makeExecutableSchema } from 'graphql-tools';
import { countryResolve } from '../resolvers';

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

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: countryResolve
})