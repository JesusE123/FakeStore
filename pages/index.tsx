import Head from 'next/head'
import axios from 'axios'
import { Roboto } from '@next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/router'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const router = useRouter()
  const [error, setError] = useState(false)
const [user, setUser] = useState({
  user: '',
  password: ''
});

function handleChange(e:any) {

    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
}

async function handleSubmit(e:any) {
    e.preventDefault();
    const response =  await axios.post('/api/auth/auth', user).
    then(res => {
      setUser(res.data)
      router.push('/dashboard')
    })
    .catch(error => {
      setError(true)
    });
}

  return (
    <>
	<div className="relative py-3 sm:max-w-xl sm:mx-auto flex justify-center items-center h-screen">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-5 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold text-center">BIENVENIDO</h1>
				</div>
        <form onSubmit={handleSubmit}>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
					
							<input 
              name="user" type="text" 
              className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
              placeholder="username" 
              onChange={handleChange}
             
              />
						</div>
            
						<div className="relative">
							<input 
              name="password" 
              type="password" 
              className=" h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
              placeholder="password" 
              onChange={handleChange}
            
             
              
              />
						</div>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1 mt-5">Submit</button>
						</div>
					</div>
          {error && <span style={{ color: 'red'}}>Usuario o Contraseña incorrectas.</span>}
          </form>
				</div>
			</div>
		</div>
	

    </>
  )

  
}
