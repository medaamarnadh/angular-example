const models = require('../models');


exports.getStudentsList = async  () => {
    const students = await models.findAll({},{
        json:true
    });
    return students;
}

exports.getStudent = async (id) => {
    const student = await models.findOne({
        id:id
    },{
        json:true
    });
    return student;
}

exports.updateStudent = async (student) => {
    const student = await models.update({
        where:{
            id: student.id
        },
        fields:student
    });
    return student
}

exports.createStudent = async (student) => {
    const student = await models.create(student);
    return student;
}