import React from 'react'

const upgrade = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Upgrade Your Experience 
        </h1>
        <p className="text-gray-400 mt-4">
          Unlock premium features and take your interview preparation to the next level.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Free Plan</h2>
          <p className="text-gray-400 mb-6">Perfect for beginners</p>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Limited mock interviews</li>
            <li>✔ Basic AI feedback</li>
            <li>✔ Access to dashboard</li>
          </ul>

          <button className="mt-6 w-full bg-gray-700 py-2 rounded-lg cursor-not-allowed">
            Current Plan
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-xl border border-blue-400">
          <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
          <p className="text-gray-200 mb-6">For serious candidates</p>

          <ul className="space-y-3 text-white">
            <li>🚀 Unlimited interviews</li>
            <li>📊 Advanced AI feedback</li>
            <li>🎯 Personalized questions</li>
            <li>💬 Voice-based interview practice</li>
          </ul>

          <button className="mt-6 w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Upgrade Now
          </button>
        </div>

      </div>

      <div className="text-center mt-16 text-gray-400">
        <p>Join hundreds of students preparing smarter with AI.</p>
      </div>

    </div>
  )
}
export default upgrade;