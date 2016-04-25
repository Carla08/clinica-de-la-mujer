var express = require('express');
var router = express.Router();
var employees = require("../schemes/employees");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Employee= new employees();
  Employee.findAll(function (error,docs){
    if (error){
      res.send(JSON.stringify(error));
    }else{
      res.render("users/index",{employees:docs});
    }
  });

});
router.get("/new",function(req,res,next){
  res.render("users/create",{});
});
router.post('/', function(req, res, next) {
  var NewEmployee= new employees({
    name: req.body.name,
    lastName: req.body.lastName,
    secondLastName: req.body.secondLastName,
    department:req.body.department,
    hiringDate: req.body.hiringDate
  });
  NewEmployee.save(function (error){
    if(error){
      console.log(error);
      res.send(JSON.stringify(error));
    }else{
      res.redirect("/");
    }
  });
  //res.render('index', { title: 'Express' });
});

router.get("/delete/:id", function (req,res,next){
  var Employee = new employees();
  Employee.DeleteEmployeeById(req.params.id,
    function(error){
      if(error){
        console.log(JSON.parse(error))
      }else{
        res.redirect("/");
      }
    });
});

router.get("/edit/:id", function (req,res,next){
  var Employee = new employees();
  Employee.findUserById(req.params.id,
    function(error,docs){
      if(error){
        console.log(JSON.parse(error))
      }else{
        res.render("users/edit",{employee:docs});
      }
    });
});

router.post("/edit/:id", function (req,res,next){
  var NewEmployee= new employees({});
  var employeeData = {
    name: req.body.name,
    lastName: req.body.lastName,
    secondLastName: req.body.secondLastName,
    department:req.body.department,
    hiringDate: req.body.hiringDate
  };
  NewEmployee.UpdateEmployeeById(req.params.id,employeeData,function (error){
    if(error){
      console.log(error);
      res.send(JSON.stringify(error));
    }else{
      res.redirect("/");
    }
  });
});

module.exports = router;
