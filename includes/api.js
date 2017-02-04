/**
 * Created by baidu on 16/6/8.
 */


// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效

var stream
__weex_define__('@weex-temp/api', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});

var apiURL = {
    baseurl: 'http://ejlian.cn/interface/',
    sport_list_url: 'home/list',

};
function getData(url, callback) {
    stream.fetch({
        method: 'GET',
        url: url,
        type:'json'
    }, function (ret) {
        callback(ret);
    });
}
exports.getSportData = function (dateStr, callback) {
    getData(apiURL.baseurl + apiURL.sport_list_url, callback);
};
