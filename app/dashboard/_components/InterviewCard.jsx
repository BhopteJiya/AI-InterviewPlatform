import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewCard = ({feedback}) => {

   const router=useRouter();

   const handleCardClick=()=>{
   router.push(`/dashboard/interview/${feedback?.mockId}/feedback`)
   }
   const handleReRecord=()=>{
    router.push(`/dashboard/interview/${feedback?.mockId}`)
   }

  return (
    <div className="p-4 border rounded-xl shadow-sm bg-gradient-to-r from-violet-200 to-blue-100  ">
      <h3 className="font-semibold text-lg">
        {feedback?.jobPosition || "Interview"}
      </h3>

      <p className="text-sm text-gray-500">
        {(feedback?.createdAt)}
      </p>

      <p className="mt-2">
         {feedback?.jobExperience} years of experience
      </p>

      <p className="mt-1 text-gray-700">
        {feedback?.feedback}
      </p>
      <div  className='flex items-end justify-between gap-2 mt-4'>
        <button className='bg-gray-600 text-white p-1 rounded w-full' onClick={handleCardClick}>
          Feedback
        </button>
        <button className='bg-blue-500 text-white p-1 rounded w-full' 
        onClick={handleReRecord}   >
          Re-Record
        </button>
      </div>
    </div>
  )
}

export default InterviewCard