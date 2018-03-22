//Login controller

module.exports = {
    'login': function (req, res) {
        return res.view('client/auth/login', {layout: 'client/layout'});
    }
};