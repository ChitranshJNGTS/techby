import React, { useState } from "react";
import { verifyCode, generatePricePool } from "../../Api/codeApi"; // ✅ centralized API

const VerifyCodePage = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [pricePoolCode, setPricePoolCode] = useState("");

const handleVerify = async (e) => {
  e.preventDefault();
  if (!code) return setMessage("Please enter a code");

  try {
    setLoading(true);
    // ✅ send as JSON object
    const res = await verifyCode(code);
    setMessage(res.data.message);
    setVerified(true);
  } catch (err) {
    setMessage(err.response?.data?.error || "Something went wrong");
    setVerified(false);
  } finally {
    setLoading(false);
  }
};

  const handleGeneratePricePool = async () => {
    try {
      setLoading(true);
      const res = await generatePricePool(); // ✅ API call
      setPricePoolCode(res.data.code);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Failed to generate price pool code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-100 bg-green-50 flex items-center justify-center px-4">
      <div className="bg-green-100 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
          Verify Your Code
        </h2>

        {!verified && (
          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="text"
              placeholder="Enter verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </form>
        )}

        {verified && !pricePoolCode && (
          <button
            onClick={handleGeneratePricePool}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Price Pool Code"}
          </button>
        )}

        {pricePoolCode && (
          <div className="mt-4 text-center text-blue-800 font-semibold">
            Your Price Pool Code: <span className="font-bold">{pricePoolCode}</span>
          </div>
        )}

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.toLowerCase().includes("success") ? "text-green-800" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyCodePage;