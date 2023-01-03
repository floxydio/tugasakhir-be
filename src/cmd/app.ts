import express from "express"
const app = express()
import RoutesApp from "../routes/routes"
const port = 2500


RoutesApp(app)



app.listen(port, () => {
   console.log("Server Running")
})
