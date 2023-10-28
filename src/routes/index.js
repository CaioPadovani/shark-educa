//Libs
const routes = require('express').Router();

// Controllers
const Student = require('../controllers/StudentController');

//Routes
routes.get("/student", Student.getAllStudents)
routes.post("/student", Student.createStudent)

module.exports = routes;