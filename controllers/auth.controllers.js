export const signin = (req,res)=>{
    res.send({message:"this is the sign in"})
    console.log("signin successful")
}

export const login = (req,res) => {
    res.send({message:"this is the login"})
    console.log("login successful")
}

export const logout = (req,res)=> {
    res.send({message:"this is logout"})
    console.log("logout sucessfull")
}