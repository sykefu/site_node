const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.signup = (req,res,next) => {
    console.log(req.body.password)
    if (req.body.username.length < 6){ //lol, only short usernames
    bcrypt.hash(req.body.password, 9)
    .then(hash => {
        const user = new User({
            username: req.body.username,
            password: hash
        })
        
        user.save()
        .then(()=> res.status(201).json({message: 'User created'}))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({error}))
    }
    else{
        res.status(400).json({message : 'too long username'})
    }
};



exports.login = (req,res,next) => {

    User.findOne({username: req.body.username})
    .then(user =>{
        if(user === null){
            res.status(401).json({message: "erreur, utilisateur inconnu"})
        }
        else{
            bcrypt.compare(req.body.password, user.password)
            .then(valid =>{
                if(!valid){
                    res.status(401).json({message: "erreur, mdp erroné"})
                }
                else{
                    let timeout = new Date();
                    let now = timeout.getTime() + 10000; //1000*3600*24
                    timeout.setTime(now)
                    let tk = jwt.sign(
                        { userId: user._id },
                        process.env.TOKENKEY,
                        { expiresIn: '24h' })
                    res.cookie("userId",user._id, {secure: false, samesite: false, httpOnly: true}).
                        cookie("token",tk, {secure: false, samesite: false, httpOnly: true}).status(200).json({
                        userId: user._id,
                        token: tk
                    })
                }
            }
            )
            .catch(error => {
                res.status(500).json({error})
            })
    }
    })
    .catch(error => res.status(500).json({error: "notfound"}))

};