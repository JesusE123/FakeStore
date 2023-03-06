import axios from 'axios'
import { Roboto } from '@next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/router'


const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  function handleChange(e: any) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await axios
      .post("/api/auth/auth", user)
      .then((res) => {
        setUser(res.data);
        router.push("/dashboard");
      })
      .catch((error) => {
        setError(true);
      });
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-300 w-1/3 h-3/4 border-blue-400 rounded-md shadow-lg text-center py-10">
          <div className="bg-white border-black rounded-md flex items-center w-3/4 h-3/4 mx-auto">
              <form className='mx-auto' onSubmit={handleSubmit}>
                <h2 className='font-serif'>Bienvenido</h2>
                <div>
                  <input 
                  type="text" 
                  placeholder='ingrese Usuario'
                  name='user'
                  className='py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400 w-auto '
                 
                  onChange={handleChange}
                  />
                </div>

                <div>
                  <input 
                  type="password" 
                  placeholder='ingrese Contraseña'
                  name='password'
                  className=' py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400 w-auto ' 
                 
                  onChange={handleChange}
                  />
                </div>
                <div>

                <button className='bg-indigo-300 mt-3 w-36 rounded'>Ingresar</button>
                </div>
                {error && <span style={{ color: 'red'}}>Usuario o Contraseña incorrectas.</span>}
              </form>
          </div>
        </div>
      </div>
	  </>

)}