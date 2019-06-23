const models = require('../models');


exports.getStudentsList = async  () => {
    const students = await models.Student.findAll({},{
        json:true
    });
    return students;
}

exports.getStudent = async (id) => {
    const student = await models.Student.findOne({
        id:id
    },{
        json:true
    });
    return student;
}

exports.updateStudent = async (id, student) => {
    
    const result = await models.Student.update(student,{
        where:{
            id: id
        }
    });
    const updatedResult  = await models.Student.findOne({
        where:{
            id: id
        }
    })
    return updatedResult
}

exports.createStudent = async (student) => {
    const result = await models.Student.create(student);
    return result;
}