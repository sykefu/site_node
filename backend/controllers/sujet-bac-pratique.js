const Sujet = require('../models/SujetBacPratique');

exports.getSujet = (req, res, next) => {
    Sujet.findOne({_id: req.params.id})
    .then(sujets => res.status(200).json(sujets))
    .catch(error => res.status(400).json({error}))
};

exports.getAllSujets = (req,res,next) => {
    console.log("getting sujets")
    Sujet.find()
    .then(sujets =>{ 
        for (var sujet of sujets){
            sujet.pdf_path = `${req.protocol}://${req.get('host')}`+sujet.pdf_path;
        }
        console.log(sujets)
        res.status(200).json(sujets)})
    .catch(error => res.status(400).json({error}))

}; 


//        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`