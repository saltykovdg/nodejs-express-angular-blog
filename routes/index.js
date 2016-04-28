/*
 * GET home page.
 */

exports.index = function (req, res, next) {
    res.render('index');
};

exports.partials = function (req, res, next) {
    var name = req.params.name;
    res.render('partials/' + name);
};