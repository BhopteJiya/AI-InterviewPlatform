"use client"

import React, { useEffect, useState } from 'react'
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { db } from '../../../../../utils/db';


import { use } from "react";
import QuestionSection from './_component/QuestionSection';
import RecordAnswer from './_component/RecordAnswer';
import Link from 'next/link'


const StartInterview = (props) => {
    const params = use(props.params);

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    useEffect(() => {
        GetInterviewDetails();
    }, [])

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId))

        const data = result[0];

        setInterviewData(data);

        // ✅ parse JSON safely
        if (data?.jsonMockResp) {
            const jsonMockResp = JSON.parse(data.jsonMockResp);
            console.log(jsonMockResp);
            setMockInterviewQuestion(jsonMockResp);
        }
    }

    return (
  <div>
    <div className='grid grid-cols-1 md:grid-cols-2'>

      {/* Questions */}
      <div>
        <QuestionSection
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
          setActiveQuestionIndex={setActiveQuestionIndex}
        />
      </div>

      {/* Video/ Audio Recording */}
      <div>
        <RecordAnswer
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
          interviewData={interviewData}
        />
      </div>
    </div>

    {/* 🔥 Buttons Section (Below both) */}
    <div className="flex justify-between items-center mt-6">

      {/* Left side: Previous + Next */}
      <div>
        {activeQuestionIndex > 0 && (
          <button
            onClick={() =>
              setActiveQuestionIndex((prev) =>
                prev > 0 ? prev - 1 : prev
              )
            }
            className="bg-gray-300 rounded-xl  border px-4 py-2 mr-3"
          >
            Previous Question
          </button>
        )}

        {activeQuestionIndex < (mockInterviewQuestion?.length || 0) - 1 && (
          <button
            onClick={() =>
              setActiveQuestionIndex((prev) =>
                prev < mockInterviewQuestion.length - 1 ? prev + 1 : prev
              )
            }
            className="bg-gray-300 rounded-xl border px-4 py-2"
          >
            Next Question
          </button>
        )}
      </div>

      {/* Right side: Submit */}
     <Link
  href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
  className="bg-green-700 text-white rounded-xl border px-6 py-2 inline-block"
>
  Submit and End
</Link>
      
      

    </div>
  </div>
)
}

export default StartInterview