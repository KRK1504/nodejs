const path = require('path');
console.log(path.sep)

const file = path.join('/content/', 'sunfolder', 'test.txt')
console.log(file)

const base=path.basename(file)
console.log(base)

const absolute=path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)