const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {
	MONGODB_URL
} = require('./config/development.config');
const routes = require('./routes');
const {logger} = require("./utils/middlewares/utils");
const jwtService = require('./utils/services/jwt.service');

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(MONGODB_URL, {
	useNewUrlParser: true,
	autoReconnect: true,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 1500
});

const mongooseConnection = mongoose.connection;
mongooseConnection.on('open', () => console.log('connected'));
mongooseConnection.on('error', (err) => console.log('mongoose err', err));

app.use(logger);

app.use(cors());

routes(app);

app.listen(
	port,
	() => console.log(`Server is running on port ${port}`)
);

