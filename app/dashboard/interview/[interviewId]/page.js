'use client'

import { InfoIcon, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import Link from 'next/link';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { db } from '../../../../utils/db';

// Interview.jsx
import { use } from "react";
const Interview = (props) => {
  const params = use(props.params);
  // now params.interviewId works

    const [interviewData, setInterviewData] = useState();
    const [webcamEnabled, setWebcamEnabled] = useState(false);

    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails();
    }, [])

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId))
        setInterviewData(result[0]);
    }

    return (
        <div className="p-6">
            
            <div className='text-center text-2xl font-bold mb-6'>
                Let's Get Started
            </div>

            {/* MAIN LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* LEFT SIDE */}
                <div className="bg-white shadow-md rounded-xl p-6">

                    <h2 className='text-lg mb-2'>
                        <strong>Job Position/Job Title : </strong>{interviewData?.jobPosition}
                    </h2>

                    <h2 className='text-lg mb-2'>
                        <strong>Job Description : </strong>{interviewData?.jobDesc}
                    </h2>

                    <h2 className='text-lg mb-4'>
                        <strong>Experience : </strong>{interviewData?.jobExperience} 
                    </h2>

                    {/* EXTRA PARAGRAPH */}
                    <div className='bg-amber-200 p-5 ' >
<div className="mt-6 bg-gray-50 border rounded-lg p-4">

    <h2 className='flex items-center gap-2 text-lg font-semibold mb-2 text-gray-800'>
        <InfoIcon className="text-blue-500" size={20} />
        Information
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed">
        Please ensure you are in a quiet environment before starting the interview. 
        Your webcam will be used to simulate a real interview experience. 
        Answer confidently and take your time to think before responding. 
        This mock interview is designed to help you improve your communication 
        and technical skills.
    </p>

</div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6">

                    {webcamEnabled ? (
                        <Webcam
                            onUserMedia={() => setWebcamEnabled(true)}
                            onUserMediaError={() => setWebcamEnabled(false)}
                            className="rounded-lg border"
                            style={{
                                height: 400,
                                width: 400
                            }}
                        />
                    ) : (
                        <>
                            <WebcamIcon className='bg-gray-200 p-3 rounded-lg' size={240} />
                            
                            <button
                                onClick={() => setWebcamEnabled(true)} varient='ghost'
                                className='mt-4 px-5 py-2 bg-black text-white rounded-md hover:opacity-90 transition'
                            >
                                Enable Webcam and microphone
                            </button>
                        </>
                    )}
                    <div className=' flex items-end justify-end mt-6'>
                        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition' >
                            Start Interview
                        </button>
                        </Link>
                    </div>
                

                </div>

            </div>

        </div>
    )
}

export default Interview