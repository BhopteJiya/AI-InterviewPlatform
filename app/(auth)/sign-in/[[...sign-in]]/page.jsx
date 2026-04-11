import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="h-screen w-screen flex">

      {/* LEFT SIDE (IMAGE + OVERLAY) */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/images/vision.jpg"
          alt="vision"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0  flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome Back </h1>
          <p className="text-lg text-center max-w-md">
            Start your journey with us. Learn, build and grow with amazing courses.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (LOGIN FORM) */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">

          
          {/* Heading */}
          

          {/* Clerk Form */}
          <SignIn />

        </div>
      

    </div>
  )
}