const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');
const app = express();
const PORT = 5000;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Mongo Db connection success'));
mongoose.connection.on('error', e => console.error('Error connecting', e));

app.use(express.json());
require('./model/user');
require('./model/post');

app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
