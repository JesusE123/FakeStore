import { NextResponse } from "next/server";
import {jwtVerify} from 'jose'
export async function middleware(request:any) {

   const jwt = request.cookies.get('myToken');

   
    if(jwt === undefined) {
        return NextResponse.redirect(new URL('/', request.url)) 
    }
    
    
    return NextResponse.next()

   }

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*']
}
