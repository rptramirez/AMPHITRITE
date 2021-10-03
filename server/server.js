const express = require('express');
const app = express();

const path = require('path');
const jsxEngine = require('express-engine-jsx');

app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

// connect mongodb database
require('./database/database')();

// setup view engine
app.set('pages', 'views/pages');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine);

// calling routes
app.use('/', require('./router/router'));

app.listen(3000, () =>
  console.log(`Server is stated on http://localhost:3000`)
);
