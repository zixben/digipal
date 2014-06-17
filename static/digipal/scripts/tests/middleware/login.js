var Middleware = function() {
    var Login = function(options, callback) {
        var AnnotatorActions = require('../scenarios/annotator/actions.js').Actions(options);
        AnnotatorActions.get.adminAccess(options.page + '/admin', casper.cli.get('username'), casper.cli.get('password'))
            .then(function() {
                return callback();
            });
    };
    return {
        'done': Login
    };
};

exports.Middleware = function() {
    return new Middleware();
};