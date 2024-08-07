const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        let authinfo = req.headers.cookie.replace(" ","")
        authinfo = authinfo.split(';')
        const userId = authinfo[0].split("=")[1]
        const token = authinfo[1].split("=")[1]
        const decodedtoken = jwt.verify(token, process.env.TOKENKEY)
        req.auth = {
            userId: userId
        };
        console.log("authed")
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({error})
    }
};