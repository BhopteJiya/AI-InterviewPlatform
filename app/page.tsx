"use client";

import Link from "next/link";
import ImageSlider from "./dashboard/_components/ImageSlider";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">InterviewPrep</h1>
        <Link href="/dashboard">
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Dashboard
          </button>
        </Link>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="text-center mt-20 px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Crack Your Interviews with <br />
          <span className="text-blue-400">AI-Powered Practice</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Practice real interview questions, get instant AI feedback,
          and improve your confidence before facing top companies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/dashboard">
            <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Start Practicing
            </button>
          </Link>

          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
      </section>
      
      <ImageSlider></ImageSlider>

      {/* 🔹 Features */}
      <section className="mt-24 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">🎤 AI Interviews</h3>
            <p className="text-gray-400">
              Experience real-time mock interviews powered by AI.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">📊 Instant Feedback</h3>
            <p className="text-gray-400">
              Get detailed analysis on your answers and communication.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">🚀 Job Ready</h3>
            <p className="text-gray-400">
              Improve confidence and crack interviews easily.
            </p>
          </div>

        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="mt-24 text-center px-6">
        <h2 className="text-3xl font-bold">
          Ready to Ace Your Interview?
        </h2>

        <p className="text-gray-400 mt-4">
          Start practicing today and land your dream job.
        </p>

        <Link href="/dashboard">
          <button className="mt-6 bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* 🔹 Footer */}
      <footer className="mt-24 text-center text-gray-500 pb-6">
        © 2026 InterviewAI. All rights reserved.
      </footer>

    </main>
  );
}