const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'DEVELOPMENT',
  })
);

app.listen(process.env.PORT, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
