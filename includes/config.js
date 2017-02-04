/**
 * Created by baidu on 16/6/8.
 */


// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效

exports.getBaseUrl = function (bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/';
        console.log('mmmm1');
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        console.log('mmmm2');
    }
    else {
        var host = 'localhost:8081';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
            console.log('mmmm3');
        }
        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./src/' : 'src/';
            console.log('mmmm4');
        } else {
            nativeBase = 'http://' + host + 'src/';
            console.log('mmmm5');
        }
    }

    return nativeBase;
};