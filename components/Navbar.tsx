import React, { useState } from "react";
import Link from "next/link";
import OffCanvas from "./OffCanvas";
import Search from "./Search";
import axios from "axios";
import { useRouter } from "next/router";
import {AiOutlinePoweroff} from "react-icons/ai"
import Swal from "sweetalert2";



function Navbar() {
  const router = useRouter()

  const Logout =  () => {
    Swal.fire({
      title: 'Desea cerrar sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar sesion'
    }).then((result) => {
      if (result.isConfirmed) {
        const res = axios.post('/api/auth/logout')
        router.push('/')
      }
    })
    
  }
  return (
    <div>
      <div className="d-flex justify-between py-3 mb-3 bg-blue-400 mt-2 shadow-xl shadow-blue-500">
        <Link href="/dashboard" className="font-bold text-3xl text-black mx-3">
          {" "}
          Bienvenido a Fake Store
        </Link>
        <Search />
        <div className="flex flex-row-reverse">
          <button className="rounded-full text-lg font-bold px-1 font-serif hover:text-white d-flex py-2 text-red-600 mt-2 mx-2" onClick={() => Logout()}>
            <AiOutlinePoweroff size={30}/>
          </button>
          <OffCanvas />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
