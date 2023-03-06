import React, { useState } from "react";
import Link from "next/link";
import OffCanvas from "./OffCanvas";
import Search from "./Search";
import axios from "axios";
import { useRouter } from "next/router";



function Navbar() {
  const router = useRouter()

  const Logout = async () => {
    const res = await axios.post('/api/auth/logout')
    router.push('/')
  }
  return (
    <div>
      <div className="d-flex justify-between py-3 mb-3 bg-blue-400 mt-2 shadow-xl shadow-blue-500">
        <Link href="/dashboard" className="font-bold text-3xl text-black mx-3">
          {" "}
          Bienvenido a Fake Store
        </Link>
        <Search />
        <div>
          <button className=" bg-red-500 rounded w-auto text-lg font-bold px-1 font-serif hover:text-white" onClick={() => Logout()}>Salir</button>
          <OffCanvas />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
