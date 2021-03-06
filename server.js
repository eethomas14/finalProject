//use some internet resouces to assist with this, most assistance with documentation on codeforgeek.com, although some information found there was outdated.

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')



// Set up the express app
const app = express();

app.use(express.static(path.join(__dirname)));

// Log requests to the console.
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.all('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
    res.sendFile(`${__dirname}/about.html`);

});

const port = process.env.PORT || 4000;
app.set('port', port);
app.listen(port, () => console.log('server started'));
module.exports = app;