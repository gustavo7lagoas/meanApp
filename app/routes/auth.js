var passport = require('passport');

module.exports = function(app) {

    app.get('/auth/github', passport.authenticate('github'));

    app.get('/auth/github/callback', passport.authenticate('github', {
        successRedirect : '/'
    }));

    app.get('/', function(req, res, next) {
        console.log('running!!!');
        if(req.isAuthenticated()) {
            return next();
        } else {
            res.render('auth');
        }
    });
};
