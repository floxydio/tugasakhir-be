import { Express, Request, Response } from "express"
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { RootQuery } from "../graphql/schema";

export default function RoutesApp(app: Express) {
   app.use("/graphql", graphqlHTTP({
      schema: new GraphQLSchema({
         query: RootQuery
      }),
      graphiql: true
   }))

   app.get("/", function (req: Request, res: Response) {
      res.send("Implement Me")
   })

}
