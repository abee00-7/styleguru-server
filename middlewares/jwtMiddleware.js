const jwt=require('jsonwebtoken')
const jwtMiddleware=(req,res,next)=>{
try{
const token=req.header['authorization'].split(" ")[1]
if(token){
    const jwtResponse=jwt.verify(token,process.env.JWT_PASSWORD)
    req.payload=jwtResponse.userId
    next()
}else{
    res.status(406).json("authorization failed ...please provide token")
}
}catch(err){
    console.log(err);
    res.status(401).json("Authorisation failed...please login")
}
}
module.exports=jwtMiddleware