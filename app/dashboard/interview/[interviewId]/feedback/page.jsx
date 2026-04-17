

'use client'

import { db } from '../../../../../utils/db'
import { UserAnswer } from '../../../../../utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState, use } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useRouter } from 'next/navigation'

function Feedback({ params }) {

    const router = useRouter();
    const resolvedParams = use(params)  // ✅ FIX
    const interviewId = resolvedParams?.interviewId

    const [feedbackList, setFeedbackList] = useState([])

    useEffect(() => {
        if (interviewId) {
            GetFeedback()
        }
    }, [interviewId])

    const GetFeedback = async () => {
        try {
            console.log("PARAM ID:", interviewId)

            const result = await db
                .select()
                .from(UserAnswer)
                .where(eq(UserAnswer.mockIdRef, String(interviewId)))
                .orderBy(UserAnswer.id)

            console.log("DB RESULT:", result)

            setFeedbackList(result)
        } catch (error) {
            console.error("Error fetching feedback:", error)
        }
    }

    return (
     
  <div className="p-10 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-green-600 mb-2">
       Congratulations!
    </h1>
   
    <p className="text-gray-600 mb-6">
      Here’s your detailed interview feedback
    </p>
     <h2 className='text-xl font-semibold text-violet-700 mb-4' >
       your overall performance rating : {feedbackList.length > 0 ? `${feedbackList[0].rating}/10` : "N/A"}
     </h2>
     <h2 className='text-xl font-semibold text-gray-700 mb-4' >
    </h2>

    {feedbackList.length === 0 ? (
      <p className="text-gray-500">No feedback found</p>
    ) : (
      feedbackList.map((item, index) => (
        <Collapsible
          key={index}
          className="mb-6  border rounded-xl shadow-sm bg-white"
        >
          {/* 🔹 Question Header */}
          <CollapsibleTrigger className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-100 rounded-xl">
            <span className="font-semibold">
              Q{index + 1}. {item.question}
            </span>

            {/* Rating badge */}
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {item.rating}/10
            </span>
          </CollapsibleTrigger>

          {/* 🔽 Expanded Content */}
          <CollapsibleContent className="p-4 border-t space-y-3">

            <div className='bg-red-200'>
              <p className="text-sm text-gray-800 ml-1"><strong>Your Answer</strong></p>
              <p className=" text-black p-2 rounded">
                {item.userAns || "No answer"}
              </p>
            </div>

            <div className='bg-green-200'>
              <p className="text-sm text-gray-800 ml-1"><strong>Correct Answer</strong></p>
              <p className=" p-2 rounded">
                {item.correctAns}
              </p>
            </div>

            <div className='bg-violet-200'>
              <p className="text-sm text-gray-800 ml-1"><strong>AI Feedback</strong></p>
              <p className=" p-2 rounded">
                {item.feedback}
              </p>
            </div>

          </CollapsibleContent>
        </Collapsible>
      ))
      // <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      // onClick={() =>router.replace('/dashboard')} }
      //   Go to Home
      // </button>
    )}
  </div>

    )
}

export default Feedback