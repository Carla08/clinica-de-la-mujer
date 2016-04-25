/**
 * Created by mario on 4/20/2016.
 */
var mongoose = require("mongoose");
var url="mongodb://localhost:27017/clinicaDeLaMujer";
var connection = mongoose.createConnection(url);


var employeeScheme = mongoose.Schema(
  {
    name:String,
    lastName: String,
    secondLastName: String,
    hiringDate:Date,
    department:String
  }
);

employeeScheme.methods.findAll= function (callback){
  this.model("Employee").find({},callback);
};

employeeScheme.methods.findUserById = function(userId,callback){
  this.model("Employee").where({"_id":userId}).findOne(callback);
};

employeeScheme.methods.DeleteEmployeeById = function (userId,callback){
  this.model("Employee").remove({"_id":userId},callback);
};

employeeScheme.methods.UpdateEmployeeById = function (userId,employee,callback){
  this.model("Employee").findByIdAndUpdate(userId,employee,callback);
};


module.exports = connection.model("Employee",employeeScheme);



