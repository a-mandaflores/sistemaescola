const Series = require('../models/Serie')

const newSeries = async (req, res) => {
        try{
            var teacher = req.body.teacher
            var school_Grade = req.body.school_Grade
            
            
            if(teacher == "" && school_Grade == ""){
                res.status(400).send('Os campos estão vazios')
            }else if(teacher == undefined || teacher == ""){
                res.status(400).send('Professor esta vazio')             
            }else if(school_Grade == undefined || school_Grade == ""){
                res.status(400).send('Serie esta vazio')
            }else{
                    const series = await Series.create({teacher:teacher,
                    school_Grade: school_Grade})
                    res.status(201).send({series})
            }

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

        if(upTeacher =="" && upSchoolGrade == ""){
            res.status(400).send('Os campos estão vazio')            
        }else if(upTeacher == undefined || upTeacher == ""){
            res.status(400).send('Campo professor esta vazio')         
        }else if(upSchoolGrade == undefined || upSchoolGrade == ""){
            res.status(400).send('Campo serie esta vazio')         
        }else{

            const upSeries = await Series.findByPk(id);
            upSeries.teacher = upTeacher
            upSeries.school_Grade = upSchoolGrade

            const edit = await upSeries.save()
            
            res.status(200).send(edit)

        }

    } catch (error) {
        res.status(400).send(error)

    }
}

const deleteSerie = async (req, res) => {
    try {
        var id = req.params.id

        const deSerie = await Series.findByPk(id);
        deSerie.destroy()
        res.status(200).send('Excluido')

        
    } catch (error) {
        res.status(400).send(error)
       
    }
}



module.exports = {newSeries, allSeries, updateSeries, deleteSerie}

// router.get('/series', (req, res) => {
//     Series.findAll().then(series => {
//         res.json(series)
//     })
// })

