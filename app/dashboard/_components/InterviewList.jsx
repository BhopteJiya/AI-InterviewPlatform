'use client'

import React, { useEffect, useState } from 'react'
import { db } from '../../../utils/db'
import { MockInterview } from '../../../utils/schema'
import { eq } from 'drizzle-orm'
import { desc } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import InterviewCard from './InterviewCard'

function InterviewList() {
    const { user } = useUser();
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        if (user) {
            GetInterviewFeedbackList();
        }
    }, [user]);


    const GetInterviewFeedbackList = async () => {
        const result = await db
            .select()
            .from(MockInterview)
            .where(
                eq(
                    MockInterview.createdBy,
                    user?.primaryEmailAddress?.emailAddress
                )
            )
            .orderBy(desc(MockInterview.createdAt)); // latest → oldest

        setFeedbackList(result);
    };

    return (
        <div className="mt-5">
            <h2 className="font-bold text-2xl mb-4">Previous Interview Feedbacks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedbackList?.map((feedback, index) => (
                    <InterviewCard key={index} feedback={feedback} />
                ))}
            </div>

        </div>
    );
}

export default InterviewList;