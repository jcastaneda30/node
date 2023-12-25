const _ = require('lodash')

const item = [1,[2,[3,[6]]]]

console.log(_.flattenDeep(item))