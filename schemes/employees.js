/**
 * Created by mario on 4/20/2016.
 */
var mongoose = require("mongoose");

var employeeScheme = mongoose.Schema(
  {
    name:String,
    lastName: String,
    secondLastName: String,
    startDate:Date
  }
);


