import React from "react";

const questions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* 🔹 Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          How to Use AI Interview Platform
        </h1>
        <p className="text-gray-600 mt-3">
          Follow these simple steps to practice and improve your interview skills.
        </p>
      </div>

      {/* 🔹 Steps */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Step 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">1️⃣ Start New Interview</h2>
          <p className="text-gray-600">
            Go to Dashboard and click on "Start New Interview" to begin your session.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">2️⃣ Choose Role / Topic</h2>
          <p className="text-gray-600">
            Select your desired role like Frontend, Backend, or DSA to get relevant questions.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">3️⃣ Answer Questions</h2>
          <p className="text-gray-600">
            Respond to AI-generated questions using text or voice input.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">4️⃣ Get AI Feedback</h2>
          <p className="text-gray-600">
            Receive instant feedback on your answers including communication and accuracy.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">5️⃣ Improve & Retry</h2>
          <p className="text-gray-600">
            Practice multiple times and improve your performance with each attempt.
          </p>
        </div>

        {/* Step 6 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">6️⃣ Track Progress</h2>
          <p className="text-gray-600">
            View your previous interviews and track your improvement over time.
          </p>
        </div>

      </div>

    </div>
  );
}
export default questions;