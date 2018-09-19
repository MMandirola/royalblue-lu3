const express = require('express');
const expressNunjucks = require('express-nunjucks');
const app = express();
const isDev = app.get('env') === 'development';
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.set('views', __dirname + '/templates');
 
const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

app.use('/static', express.static('static'));
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/result', (req, res) => {
    const params = req.body;
    res.render('result.html',{"text": params["text"]});
});
 
app.listen(8080);