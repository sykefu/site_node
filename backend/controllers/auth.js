const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedtoken = jwt.verify(token, process.env.TOKENKEY)
        const userId = decodedtoken.userId;
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