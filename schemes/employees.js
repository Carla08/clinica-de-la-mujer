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

employeeScheme.methods.findUserById = (userId,callback)=>{
  this.model("Employee").find({"_id":userId},callback);
};

employeeScheme.methods.DeleteEmployeeById = function (userId,callback){
  this.model("Employee").remove({"_id":userId},callback);
};

module.exports = connection.model("Employee",employeeScheme);



