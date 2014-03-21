var mongoose = require("mongoose");

//=========== schema ================
var NettutsSchema = mongoose.Schema({
    first: String,
    last: String,
    dob: { type: Date},
    gender: String, 
    hair_colour: String, 
    occupation: String,
    nationality: String
});

//========== model =================
module.exports = mongoose.model('Nettuts', NettutsSchema);

