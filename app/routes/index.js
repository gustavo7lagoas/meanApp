module.exports = function(app) {
    app.get('/', function(req, res, next) {
        console.log('running!!!');
        if(req.isAuthenticated()) {
            return next();
        } else {
            res.render('auth');
        }
    });
};
