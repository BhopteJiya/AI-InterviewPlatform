"use client"

import { UserButton } from '@clerk/nextjs'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

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

  <li>
    <Link 
      href="/dashboard"
      className={`hover:text-blue-600 cursor-pointer 
      ${path === "/dashboard" ? "text-blue-600 font-bold" : ""}`}
    >
      Dashboard
    </Link>
  </li>
<li>
  <Link 
    href="/dashboard/upgrade"
    className={`hover:text-blue-600 cursor-pointer 
    ${path === "/dashboard/upgrade" ? "text-blue-600 font-bold" : ""}`}
  >
    Upgrade
  </Link>
</li>

  <li>
    <Link 
      href="/dashboard/questions"
      className={`hover:text-blue-600 cursor-pointer 
      ${path === "/dashboard/questions" ? "text-blue-600 font-bold" : ""}`}
    >
        How it Works?
    </Link>
  </li>


  <li>
    <Link 
      href="/how-it-works"
      className={`hover:text-blue-600 cursor-pointer 
      ${path === "/how-it-works" ? "text-blue-600 font-bold" : ""}`}
    >
      Questions
    </Link>
  </li>

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