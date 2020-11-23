var Burypoint  = require('../proxy').Burypoint

exports.buryPoint = function(req, res, next) {
    Burypoint.buryPoint(req.body, res, function (err) {
        if (err) {
            res.json({status: 500, message: err})
        } else {
            res.json({status: 200, message: '成功'})
        }
    })
}