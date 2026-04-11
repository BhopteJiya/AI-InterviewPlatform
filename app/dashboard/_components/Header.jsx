"use client"

import { UserButton } from '@clerk/nextjs'
import {usePathname} from 'next/navigation'
import React from 'react'

const Header = () => {
    const path=usePathname();


  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-blue-600">InterviewPrep</h1>
      </div>

      {/* NAV LINKS */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6 text-gray-600 font-medium">
          <li className={`hover:text-blue-600 cursor-pointer
             ${path === "/dashboard" ? "text-blue-600 font-bold" : ""}`}>Dashboard</li>
          <li className={`hover:text-blue-600 cursor-pointer
             ${path === "/upgrade" ? "text-blue-600 font-bold" : ""}`} >Upgrade</li>
          <li className={`hover:text-blue-600 cursor-pointer
             ${path === "/questions" ? "text-blue-600 font-bold" : ""}`}>Questions</li>
          <li className={`hover:text-blue-600 cursor-pointer
             ${path === "/how-it-works" ? "text-blue-600 font-bold" : ""}`}>How it Works?</li>
        </ul>
      </nav>

      {/* USER */}
      <div className="flex items-center gap-4">
        

        <UserButton afterSignOutUrl="/" />
      </div>

    </header>
  )
}

export default Header