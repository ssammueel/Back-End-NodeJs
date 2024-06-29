export function tokenVerification(req, res, next){
    console.log("tonining here")
    res.send({message:"this is the token middleware"})
    
}