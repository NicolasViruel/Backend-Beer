const jwt = require("jsonwebtoken")

const createToken = (user) =>{

    const expToken = new Date();
    expToken.setHours( expToken.getHours()+ 3 )

    const payload ={
        user_id : user._id,
        iat : Date.now(),
        exp: expToken.getTime(),
        role: user.role,
        active: user.active

    }
    return jwt.sign(payload, process.env.JWT_KEY)
}

const decoded = (token) =>{

   return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = {
    createToken,
    decoded
}
