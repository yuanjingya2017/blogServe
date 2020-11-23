var models = require('../models');
var Burypoint    = models.Burypoint;

exports.buryPoint = function (data, opt, callback) {
    console.log(data.guid, '====buryPoint')
    const {
        guid,
        isNew
    } = data
    // 过滤
    // isNew, 为flase的话 pv+1,true则直接保存
    // todo query
    if (isNew) {
        let burypoint = new Burypoint({
            guid,
            uv: 1,
            pv: 1
        });
        burypoint.save(callback);
    } else {
        Burypoint.findOne({
            guid
        }, function (err, data) {
            if (err) {
                return new Error(err)
            } else {
                let num = data.pv + 1
                let uv
                let temp1 = new Date(data.date).getTime()
                let temp2 = new Date().getTime()
                console.log(temp2, temp1, (temp2 - temp1)/1000)
                if ((temp2 - temp1)/1000 > 24 * 60 * 60) {
                    uv = data.uv + 1
                } else {
                    uv = data.uv
                }
                let date = data.uv
                let burypoint = new Burypoint({
                    guid,
                    pv: num,
                    uv
                })
                burypoint.save(callback)
            }
        })
    }
};