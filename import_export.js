//CommonJS - every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const {john, peter} = require('./names')
const sayHi = require('./utils')
require('./mind_grenade')

sayHi('susan')
sayHi(john)
sayHi(peter)

