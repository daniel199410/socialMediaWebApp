const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');
const app = express();
const PORT = 5000;

app.use(express.json());
require('./model/user');
app.use(require('./routes/auth'));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Mongo Db connection success'));
mongoose.connection.on('error', e => console.error('Error connecting', e));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));