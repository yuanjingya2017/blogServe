var Comment  = require('../proxy').Comment

exports.sendComment = function(req, res, next) {
    Comment.sendComment(req.body, res, function (err) {
        if (err) {
            res.json({status: 500, message: err})
        } else {
            // 是否再查一遍？
            // 再重新渲染一遍评论列表？
            res.json({status: 200, message: '提交成功'})
        }
    })
}