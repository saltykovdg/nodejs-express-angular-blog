var express = require('express'),
    path = require('path'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    api = require('./routes/api');

var app = express();

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {
    layout: false
});

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', index.index);
app.get('/partials/:name', index.partials);

// JSON API
app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

// redirect all others to the index (HTML5 history)
app.get('*', index.index);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
