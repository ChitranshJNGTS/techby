import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WinnerCheckPage = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    if (code.trim() === "") {
      setResult("Please enter your code");
      return;
    }

    // Example logic (replace with API later)
    if (code === "WIN123") {
      setResult("🎉 Congratulations! You are this week's winner!");
    } else {
      setResult("Sorry, this code did not win this week.");
    }
  };

  const winners = [
    { name: "Rahul Sharma", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Priya Verma", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Aman Singh", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Sneha Patel", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  const faqs = [
    {
      question: "How do I get a winner code?",
      answer: "Simply buy any product from our website during the contest period to receive a unique Prize Pool Code."
    },
    {
      question: "When will the winners be announced?",
      answer: "Winners are announced every Friday at 5 PM. On this page, you can check if your code is a winner."
    },
    {
      question: "What prizes can I win?",
      answer: "You can win exciting prizes like iPhones, PS consoles, or other tech gadgets."
    },
    {
      question: "Can I participate multiple times?",
      answer: "Yes! Each purchase gives you a new prize code, increasing your chances to win."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-50 via-white to-green-50 shadow-2xl rounded-2xl p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            🏆 Check if You're a Winner!
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Enter your Prize Pool Code below and find out if you've won an amazing prize like an iPhone, PS Console, or tech gadget!
          </p>

          {/* Code Check Input */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Enter your code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border px-4 py-3 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleCheck}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105 active:scale-95"
            >
              Check Now
            </button>
          </div>

          {result && (
            <p className="mt-5 font-medium text-lg text-gray-800">{result}</p>
          )}
        </div>

        {/* How It Works Section */}
        <div className="bg-white shadow-lg rounded-2xl p-10 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">How It Works</h2>
          <ul className="space-y-4 list-decimal list-inside text-gray-700 text-lg md:text-xl">
            <li>Purchase any product from our website during the contest period.</li>
            <li>Receive a unique <span className="font-semibold text-green-600">Prize Pool Code</span> with your order.</li>
            <li>Come to this page on <span className="font-semibold text-green-600">22nd April</span>.</li>
            <li>Enter your code to see if you're a winner of prizes like iPhone, PS Console, or other tech gadgets.</li>
          </ul>
        </div>

        {/* Winners Gallery */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">🎉 This Week's Winners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {winners.map((winner, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-2 border-green-500"
                />
                <p className="font-medium text-gray-800">{winner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-green-50 via-white to-green-50 shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
                <summary className="font-semibold cursor-pointer text-gray-800">{faq.question}</summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Participation Rules */}
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Participation Rules</h2>
          <p className="text-gray-700 text-lg md:text-xl">
            1. Each purchase = 1 Prize Pool Code.<br/>
            2. Code must be checked on this page on 22nd April.<br/>
            3. One code per order. Multiple orders = more chances to win.<br/>
            4. Prizes include iPhone, PS Console, or other tech gadgets.<br/>
            5. Winners will be announced publicly on this page.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default WinnerCheckPage;