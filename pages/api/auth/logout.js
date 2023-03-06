import { verify } from "jsonwebtoken"
import {serialize} from 'cookie'

export default function logoutHandler(req, res) {
    const { myToken } = req.cookies

    if (!myToken) {
        return res.status(401).json({ error: 'no token' })
    }

    try {
        verify(myToken, 'secret')
        const serialized = serialize('myToken', null,{
            httpOnly:true,
            sameSite:'strict',
            maxAge: 0,
            path: '/',
           
            
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json('logout succesfully')
    } catch (error) {
        console.log(error.res.data)
    }
}