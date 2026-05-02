import React from 'react'
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';

function Dashboard() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 md:p-10'>

      {/* 🔹 Header */}
      <div className='mb-8'>
        <h2 className='font-bold text-4xl md:text-5xl text-gray-800'>
          Dashboard
        </h2>

        <p className='text-gray-600 mt-3 max-w-2xl'>
          Whether you're a beginner or preparing for top companies, we provide 
          the tools you need to improve your communication, problem-solving, 
          and overall performance—so you walk into every interview ready to succeed.
        </p>
      </div>

      {/* 🔹 Add Interview Card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
        
        <div className='bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300'>
          <h3 className='text-lg font-semibold mb-4 text-gray-700'>
            Start New Interview
          </h3>

          <AddNewInterview className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition" />
        </div>

      </div>

      {/* 🔹 Interview List Section */}
      <div className='bg-white shadow-lg rounded-2xl p-6'>
        <h3 className='text-xl font-semibold mb-4 text-gray-700'>
          Your Interviews
        </h3>

        <InterviewList />
      </div>

    </div>
  )
}

export default Dashboard;