var models = require('../models');
var Burypoint    = models.Burypoint;

exports.buryPoint = function (data, opt, callback) {
    console.log(data, '====buryPoint')
    const {
        guid,
        isNew
    } = data
    // 过滤
    // isNew, 为flase的话 pv+1,true则直接保存
    // todo query
    if (isNew) {
        let burypoint = new Burypoint({
            guid
        });
        burypoint.save();
    } else {
        let num = Burypoint.findOne({
            guid
        }, function (err, burypoint) {
            return burypoint.pv
        })
        let burypoint = new Burypoint({
            guid,
            pv: num
        })
        burypoint.save()
    }
};