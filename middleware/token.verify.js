import jwt from 'jsonwebtoken'
export function tokenVerification(req, res, next){

    const token = req.headers.authorization.split(" ")[1]

    // console.log(jwt.decode(token))    

    jwt.verify(token, "samuel mumo mambo", (err, data)=>{
        if(!err){
            next()
        }
        else{
            return res.send({message:"woi there is error in token generation"})
        }
        
    })
    
}

// http://localhost:3000/api/acess 