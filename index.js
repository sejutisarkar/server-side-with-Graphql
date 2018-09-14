import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {ApolloEngine} from 'apollo-engine';
import { ApolloServer } from 'apollo-server-express';

import models , {sequelize} from './models';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: true,
  engine: false,
});

const engine = new ApolloEngine({
  apiKey:'service:sejutisarkar-6849:ftRPv64acPM2APNac2MEMw'
});
// async function start() {
//   await models.sequelize.sync({force:true});
// }
server.applyMiddleware({app, path: '/graphql'});

sequelize.sync().then(async () =>{
  engine.listen({
    port: 8080,
    expressApp: app,
  }, () => {
    console.log(`🚀 Server is ready at http://localhost:8080${server.graphqlPath}`);
  });
});


//
// app.listen({ port: 8080}, () => {
//   console.log(`🚀 Server is ready at http://localhost:8080${server.graphqlPath}`);
// })
