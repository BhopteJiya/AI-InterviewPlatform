'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text'
import { Button } from '@/components/ui/button'
import { Mic, Mic2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { getChatResponse } from '../../../../../../utils/GemeniAPIModal'
import { useUser } from '@clerk/nextjs'
import { db } from '../../../../../../utils/db'
import { UserAnswer } from '../../../../../../utils/schema'
import moment from 'moment'


function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex,interviewData }) {
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const {user}=useUser();
  const [loading, setLoading] = useState(false)

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,

  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  })

  //  FIXED (No duplicate issue)
  useEffect(() => {
    results.map((result) => (
      setUserAnswer(prevans => prevans + result?.transcript)))

  }, [results])

  if (error) return <p>Speech API not supported</p>

 useEffect(() => {
  if (!isRecording && userAnswer.length > 10) {
    UpdateUserAnswer()
  }
}, [isRecording])  // only fires when recording stops

  const SaveUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText() 
      console.log("Final Answer:", userAnswer) 
    }
    else {
      startSpeechToText();
    }
  }


const UpdateUserAnswer=async()=>{
  setLoading(true);
 const feedbackprompt = "question:" + (mockInterviewQuestion[activeQuestionIndex]?.question || "") +
        ",  answer:" + userAnswer + "depends on questiona and user answer for give interview question" +
        "please give us rating score between 1 to 10 for this answer and also give me feedback on how can i improve this answer in 3 to 5 lines. give me response in json format with fields rating and feedback. "

       toast.loading('Saving answer...')
       setLoading(false);
  

      const result = await getChatResponse(feedbackprompt)
      const rawText = result
      const mockJsonResp = rawText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim()      // const mockJsonResp=(result.response.text().response('```json','').replace('```', ''))
      console.log(mockJsonResp)
 
      let parsed

      try {
        parsed = JSON.parse(mockJsonResp)
        setFeedback(parsed)

        console.log("Parsed Response:", parsed)
      } catch (err) {
        console.error("JSON Parse Error:", mockJsonResp)
      }

      const res=await db.insert(UserAnswer).values({
        mockIdRef: interviewData.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question || "",
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer || "",
        userAns: userAnswer,
        feedback: parsed?.feedback || "",
        rating: parsed?.rating || "",
        userEmail: user.primaryEmailAddress?.emailAddress || "",
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      })
        if(res){  
        toast('user answer saved successfully ')
        setUserAnswer('')
        setResults([])

        }
        setResults([]) // Clear previous results to avoid duplicates
        setLoading(false);

}


  return (
    <div className='flex flex-col items-center justify-center my-20'>

      {/* Webcam Section */}
      <div className='relative flex flex-col items-center'>
        <Image
          src={'/webcam.avif'}
          width={200}
          height={200}
          alt='webcam'
          className='absolute '
        />

        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
            borderRadius: '9px',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Button */}
      <Button
        variant="outline"
        className="my-10 flex items-center bg-gray-300 gap-2"
        onClick={SaveUserAnswer}
      >
        {isRecording ?
          <>
            <Mic className="animate-pulse text-red-600" />
             Stop Recording...
          </>
          :
          'Record Answer'
        }
      </Button>

     

    </div>
  )
}

export default RecordAnswerSection






