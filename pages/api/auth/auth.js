import jwt from "jsonwebtoken";
import {serialize} from 'cookie'
const errorMesage = 'Credenciales incorrectas'

export default function loginHandler(req,res) {
   const  {user, password} = req.body;
    
   if(user === 'admin' && password === 'admin123') {
        const token = jwt.sign({
            user: 'admin',
            apodo: 'el best'
        }, 'secret')
        const serialized = serialize('myToken', token,{
            httpOnly:true,
            sameSite:'strict',
            path: '/'
            
        })
        res.setHeader('Set-Cookie', serialized)
        return res.json('login succesfully')
   } 

   return res.status(401).json({error: 'ss'})
   
}

