var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    passport.use(new GitHubStrategy({
        var User = mongoose.model('User');
        clientId : 'f8ac2a2b2603a0c2163c',
        clientSecret : '1e8a40ac47dc130cdf653a56e031608cadae6fda',
        callbackUrl : 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        User.findOrCreate(
            { 'login' : profile.username },
            { 'name' : profile.username },
            function(error, user) {
                if(error) {
                    console.log(error);
                    return done(error);
                }
                return done(null, user);
            }
        );
    }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).exec().
            then(function(user) {
                done(null, user);
            });
    });
};

