import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const RootQuery = new GraphQLObjectType({
   name: "RootQuery",
   fields: {
      name: {
         type: GraphQLString,
         resolve(parent, args) {
            return "ABCD"
         }
      }
   }
})

