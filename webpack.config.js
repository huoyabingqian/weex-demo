require('webpack')
require('weex-loader')


var path = require('path')
var fs = require('fs');

var entry = {};

function walk(dir, root) {

  var directory = path.join(__dirname, root, dir);

  fs.readdirSync(directory)
    .forEach(function(file) {
      var fullpath = path.join(directory, file);
      var stat = fs.statSync(fullpath);
      var extname = path.extname(fullpath);
      if (stat.isFile() && extname == '.we') {
        var name = path.join(dir, path.basename(file, extname));
        entry[name] = fullpath+'?entry=true';
      } else if (stat.isDirectory()) {
        var subdir = path.join(dir, file);
        walk(subdir, root);
      }
    });
}
walk('./', 'src');

module.exports = {
  entry: entry,
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  }
}
