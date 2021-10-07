const Series = require('../models/Serie')

const newSeries = async (req, res) => {
        try{
            var teacher = req.body.teacher
            var scholGrade = req.body.scholGrade
            const series = await Series.create({teacher:teacher,
            scholGrade: scholGrade})
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
    const upSeries = await Series.findByPk(1);
    upSeries.nome = "Mouse Top";
 
    } catch (error) {
        res.status(400).send(error)

    }
}



module.exports = {newSeries, allSeries}

// router.get('/series', (req, res) => {
//     Series.findAll().then(series => {
//         res.json(series)
//     })
// })

