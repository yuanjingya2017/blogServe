var models = require('../models');
var Comment    = models.Comment;

/**
 * 根据关键字，获取一组用户
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {String} query 关键字
 * @param {Object} opt 选项
 * @param {Function} callback 回调函数
 */
exports.sendComment = function (data, opt, callback) {
    console.log(data, '====Comment')
    const {
        name,
        comments
    } = data
    let comment = new Comment({
        name,
        comments
    });
    // 过滤
    comment.save(callback);
};