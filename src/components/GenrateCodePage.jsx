import React, { useState } from "react";
import { Copy, CheckCircle, Loader2 } from "lucide-react";
import { generateVerificationCode } from "../Api/codeApi"; // ✅ import API

const GenerateCodePage = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sellerId = "SELLER_ID"; // replace with logged-in seller id

  const generateCode = () => {
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCode(newCode);
    setSuccess(false);
  };

  const sendCode = async () => {
    if (!code) return;

    try {
      setLoading(true);

      await generateVerificationCode({ code, sellerId }); // ✅ use API file

      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Failed to store code");
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Generate Verification Code
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Generate a code to verify product delivery
        </p>

        {/* Code Display */}
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl mb-6">
          <span className="text-2xl font-bold tracking-widest">
            {code || "------"}
          </span>
          <button
            onClick={copyCode}
            className="text-gray-600 hover:text-indigo-600"
          >
            <Copy size={22} />
          </button>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateCode}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition mb-4"
        >
          Generate Code
        </button>

        {/* Send to Backend */}
        <button
          onClick={sendCode}
          disabled={!code || loading}
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Saving...
            </>
          ) : (
            "Save Code"
          )}
        </button>

        {/* Success Message */}
        {success && (
          <div className="flex items-center gap-2 text-green-600 mt-6 justify-center">
            <CheckCircle size={20} />
            Code saved successfully (Valid for 3 days)
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateCodePage;