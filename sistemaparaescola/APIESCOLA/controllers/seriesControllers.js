const Series = require('../models/Serie')

const newSeries = async (req, res) => {
        try{
            var teacher = req.body.teacher
            var school_Grade = req.body.school_Grade
            const series = await Series.create({teacher:teacher,
            school_Grade: school_Grade})
            res.status(201).send({series})

        }catch(error){
            res.status(400).send(error)
        }
   
}

const allSeries = async (req, res) => {
    try {
        const series = await Series.findAll();
        res.status(200).send(series);
    } catch (error) {
        res.status(400).send(error)

    }
}

const updateSeries = async (req, res) => {
    try {
        var id = req.params.id
        
        var upTeacher = req.body.teacher
        var upSchoolGrade = req.body.school_Grade

        const upSeries = await Series.findByPk(id);
        upSeries.teacher = upTeacher
        upSeries.school_Grade = upSchoolGrade

        const edit = await upSeries.save()
        
        res.status(200).send(edit)
        
    } catch (error) {
        res.status(400).send(error)

    }
}



module.exports = {newSeries, allSeries, updateSeries}

// router.get('/series', (req, res) => {
//     Series.findAll().then(series => {
//         res.json(series)
//     })
// })

