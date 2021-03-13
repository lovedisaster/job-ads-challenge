import express from 'express';
let app = express();
import path from 'path';
import volleyball from 'volleyball';
import routers from "./routers/index";

import config from './config';
import bodyParser from 'body-parser';
import { createServer } from 'http';

const currentRoot = process.cwd();

app.use(volleyball);
app.set('view engine', 'pug');
app.set('views', `${currentRoot}${config.paths.serverPages}`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(`${currentRoot}/dist`));
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app = routers(app);

const server = createServer(app);
server.listen(process.env.PORT || 3001, function () {
  console.log("Server is running on port 3001");
});




