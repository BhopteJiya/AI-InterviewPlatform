'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text'
import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'

function RecordAnswerSection() {
  const [userAnswer, setUserAnswer] = useState('')

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  })

  // ✅ FIXED (No duplicate issue)
  useEffect(() => {
    results.map((result) =>(
      setUserAnswer(prevans=>prevans+result?.transcript)))
     
  }, [results])

  if (error) return <p>Speech API not supported</p>

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
            height:300,
            width:'100%',
            zIndex:10,
            borderRadius: '9px',
            objectFit: 'cover',   
          }}
        />
      </div>

      {/* Button */}
     <Button
  variant="outline"
  className="my-10 flex items-center bg-gray-300 gap-2"
  onClick={isRecording ? stopSpeechToText : startSpeechToText}
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

      {/* Live Answer Display (🔥 added) */}
    
      {/* Debug Button */}
      <button
        onClick={() => console.log(userAnswer)}
        className='border px-3 py-1 rounded mt-3'
      >
        Show User Answer
      </button>

    </div>
  )
}

export default RecordAnswerSection








// 'use client'

// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import Webcam from 'react-webcam'
// import useSpeechToText from 'react-hook-speech-to-text'
// import { Button } from '@/components/ui/button'
// import { Mic } from 'lucide-react'

// function RecordAnswerSection() {
//   const [userAnswer, setUserAnswer] = useState('')

//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   })

//   // ✅ FIXED (no duplicate, no bug)
//   useEffect(() => {
//     const combinedText = results
//       .map((result) => result.transcript)
//       .join(' ')

//     setUserAnswer(combinedText)

//     console.log("User Speaking:", combinedText) // 🔥 live console
//   }, [results])

//   if (error) return <p>Speech API not supported</p>

//   return (
//     <div className='flex flex-col items-center justify-center my-20'>

//       {/* Webcam */}
//       <div className='relative flex flex-col items-center'>
//         <Image
//           src={'/webcam.avif'}
//           width={200}
//           height={200}
//           alt='webcam'
//           className='absolute h-[300px] w-full rounded-lg opacity-80'
//         />

//         <Webcam
//           mirrored={true}
//           className='h-[300px] w-[300px] rounded-lg'
//         />
//       </div>

//       {/* Button */}
//       <Button
//         variant="outline"
//         className="my-10 flex items-center bg-gray-300 gap-2"
//         onClick={() => {
//           if (isRecording) {
//             stopSpeechToText()
//           } else {
//             setUserAnswer('') // reset
//             startSpeechToText()
//           }
//         }}
//       >
//         {isRecording ? (
//           <>
//             <Mic className="animate-pulse text-red-600" />
//             Stop Recording...
//           </>
//         ) : (
//           'Record Answer'
//         )}
//       </Button>

//       {/* Live Text */}
//       <p className='text-sm text-center max-w-md'>
//         {userAnswer} <span className='text-gray-400'>{interimResult}</span>
//       </p>

//       {/* Debug */}
//       <button
//         onClick={() => console.log(userAnswer)}
//         className='border px-3 py-1 rounded mt-3'
//       >
//         Show User Answer
//       </button>

//     </div>
//   )
// }

// export default RecordAnswerSection