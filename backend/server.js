const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
require("dotenv").config();
const app = express();

// for removing the cors error
app.use(cors());
// For having colorful consoles
colors.enable();
// Connect to DB
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "DEVELOPMENT",
  })
);

app.listen(process.env.PORT, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
