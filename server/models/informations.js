/*
*Name: Maiara Almeida
*Student id: 301145511
*/

let mongoose = require('mongoose');
//create infomation model
let informationModel = mongoose.Schema({

    name : String,
    number : String,
    email : String

},

{

collection : "informations"

});

module.exports = mongoose.model('Information', informationModel);