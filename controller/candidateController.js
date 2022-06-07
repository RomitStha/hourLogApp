const db = require('../models')
const Candidates = db.candidate

const insert = async(req,res) => {
    try{
        const candidate = await Candidates.create(req.body)
        res.status(200).json({candidate})

    }
    catch(err)
    {
        console.log({message:err.message})
    }
}

module.exports = {
    insert
}