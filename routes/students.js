var express = require('express');
var router = express.Router();
const student = require('../services/students')

router.get('/', async (req,res,next) => {
    const list = await student.getStudentsList()
    res.status(201).send({
        result: list
    })
})

router.post('/', async (req,res,next) => {
    const body = req.body;
    const result = await student.createStudent(body)
    res.status(201).send({
        result
    })
})

router.get('/:id', async (req,res,next) => {
    const result = await student.getStudent(req.params.id)
    res.status(201).send({
        result
    })
})

router.put('/:id', async (req,res,next) => {
    const body = req.body
    const result = await student.updateStudent(req.params.id, body)
    res.status(201).send({
        result
    })
})

router.delete('/:id', async (req,res,next) => {
    const result = await student.deleteStudent(req.params.id);
    res.status(201).send({
        result:'Successfully deleted'
    });
})  


module.exports = router;