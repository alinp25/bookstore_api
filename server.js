const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

const app = express();
app.use(bodyParser.json());

const { databaseURI } = require('./config/config');
mongoose.connect(databaseURI, { useNewUrlParser: true });

const apiRoutes = require('./routes/apiRoutes');

app.use('/api/books/', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));