import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {

    const textToSpeach = (text) => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else
            alert('Text to speech not supported')
    }

    return mockInterviewQuestion && (
        <div className='p-5 border rounded-lg my-10'>

            {/* Question Numbers */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {mockInterviewQuestion.map((question, index) => (
                    <h2
                        key={index}
                        className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer
              ${activeQuestionIndex === index ? 'bg-primary text-white' : ''}
            `}
                    >
                        Question #{index + 1}
                    </h2>
                ))}
            </div>

            {/* Question Text */}
            <h2 className='my-5 text-md md:text-lg'>
                {mockInterviewQuestion[activeQuestionIndex]?.question}
            </h2>
            <Volume2 className='cursor-pointer' onClick={() => textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)} />
            <div className='border rounded-lg p-5 bg-blue-100 my-10'>
                <h2 className='flex gap-2 items-center text-primary'>
                    <Lightbulb></Lightbulb>
                    <strong>Note:</strong>
                </h2>
                <h2 className='text-sm'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
            </div>
            

        </div >
    )
}

export default QuestionsSection 