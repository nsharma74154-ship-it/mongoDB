const mongoose = require('mongoose');

name: {type: string}
disease: {type: string}
wardnumber: {type: number}
admittedDate: {type: Date}

module.exports = mongoose.model('Patient',patientschema);