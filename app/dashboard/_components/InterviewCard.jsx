import React from 'react'

const InterviewCard = ({feedback}) => {
  return (
    <div className="p-4 border rounded-xl shadow-sm">
      <h3 className="font-semibold text-lg">
        {feedback?.jobPosition || "Interview"}
      </h3>

      <p className="text-sm text-gray-500">
        {(feedback?.createdAt)}
      </p>

      <p className="mt-2">
        <strong>Score:</strong> {feedback?.rating}/10
      </p>

      <p className="mt-1 text-gray-700">
        {feedback?.feedback}
      </p>
    </div>
  )
}

export default InterviewCard