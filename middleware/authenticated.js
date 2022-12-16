const utils_jwt = require("../utils/jwt")

const isAuth = (req, res , next)=>{

    if (!req.headers.authorization) {
       return res.status(400).send({msg:"authorization header missing"});
    } else {
        const token = req.headers.authorization.replace("Bearer ", "");

        try {
            const payload = utils_jwt.decoded(token);
            
            req.user = payload
            next()
        } catch (error) {
            res.status(400).send({msg:"Error you are not authorized"});
            
        }
    }
}

const isAdmin = (req, res, next) =>{
    console.log(req.user.role);
    if (req.user.role && req.user.role === "admin") {
       return next()
    }else{
       return res.status(403).send({msg:"You do not have the required role for this resource"});
    }

}

module.exports = {
    isAuth,
    isAdmin,
}