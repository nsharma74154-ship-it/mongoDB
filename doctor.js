const mongoose = require('mongoose');

name: {type:string}
email: {type:string}
password: {type:string}

module.exports = mongoose.model('Doctor',doctorschema);