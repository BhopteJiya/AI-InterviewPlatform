"use client"

import React, { useEffect, useState } from 'react'
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { db } from '../../../../../utils/db';


import { use } from "react";
import QuestionSection from './_component/QuestionSection';
import RecordAnswer from './_component/RecordAnswer';

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
                    <button
                        onClick={() =>
                            setActiveQuestionIndex((prev) =>
                                prev > 0 ? prev - 1 : prev
                            )
                        }
                        className="border px-4 py-2 mt-5 mr-3"
                    >
                        Previous Question
                    </button>

                    <button
                        onClick={() =>
                            setActiveQuestionIndex((prev) =>
                                prev < mockInterviewQuestion.length - 1 ? prev + 1 : prev
                            )
                        }
                        className="border px-4 py-2 mt-5"
                    >
                        Next Question
                    </button>
                </div>

                {/* Video/ Audio Recording */}

                <div>
                    <RecordAnswer   activeQuestionIndex={activeQuestionIndex}
                        mockInterviewQuestion={mockInterviewQuestion} 
                        interviewData={interviewData}></RecordAnswer>
                </div>
            </div>
        </div>
    )
}

export default StartInterview