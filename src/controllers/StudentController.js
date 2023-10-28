const mongoose = require("mongoose");
const Student = mongoose.model("Student");

const createStudentObject = (req) => {
    const studentObject = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };

    return studentObject;
};

// Operação de criação (Create)
module.exports.createStudent = async (req, res) => {
    const  studentObject  = createStudentObject(req);
    try {
        await Student.create(studentObject);
        res.status(201).json({ message: "Estudante criado com sucesso!" }).end();
    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro durante o cadastro do estudante." }).end();
    }
};

// Operação de leitura (Read)
module.exports.getAllStudents = (req, res) => {
    Student.find()
        .then((response) => {
            return res.status(200).json(response).end();
        })
        .catch((error) => {
            res.status(500).json({ error: "Ocorreu um erro ao recuperar os estudantes." }).end();
        });
};
