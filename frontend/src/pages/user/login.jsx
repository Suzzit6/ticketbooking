import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleOAuth } from "./googleAuth";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const LoginPopup = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState("options");
  const [email, setEmail] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    // const response = await axios.post("http://localhost:6900/api/user/email-auth", {
    //   email: email,
    // });
    // console.log(response);
    setCurrentStep("resendEmail");
  };
  const handleResendEmail = async (e) => {
    e.preventDefault();
    // const response = await axios.post("http://localhost:6900/api/user/email-auth", {
    //   email: email,
    // });
    // console.log(response);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl w-full max-w-md p-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => {onClose(); setCurrentStep("options")} }
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            {/* DEUCE */}
            <div className="mb-8 ">
              <img src="/api/placeholder/120/40" alt="DEUCE" className="h-10" />
            </div>

            {currentStep === "options" && (
              <>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex justify-center">
                  Login or Sign up to DEUCE
                </h2>

                {/* Google Sign In */}
                <div className="mb-6 flex justify-center">
                  <GoogleOAuth className="w-11/12 p-3 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                    <img
                      src="/api/placeholder/24/24"
                      alt="Google"
                      className="w-6 h-6"
                    />
                    <span className="text-gray-600">Sign in with Google</span>
                  </GoogleOAuth>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-4 text-gray-500 text-sm">or</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Email Button */}
                <button
                  className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setCurrentStep("email");
                  }}
                >
                  Continue with email
                </button>
              </>
            )}
            {currentStep === "email" && (
              <>
              
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex justify-center">
                  Login or Sign up to DEUCE
                </h2>

                {/* {Input for entering email address and a continue btn in red } */}
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg border border-gray-200 mb-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="w-full p-3 rounded-lg border border-gray-200 text-white hover:bg-red-600 transition-colors bg-red-500"
                    onClick={handleEmailLogin}
                  >
                    Continue
                  </button>
                  {/* {Go back button which deactivates this pop up and activates isopen popup } */}
                  <button
                    className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setCurrentStep("options");
                    }}
                  >
                    Go back
                  </button>
                </form>
              </>
            )}
            {currentStep === "resendEmail" && (
              <>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex justify-center">
                  Link sent to your email
                </h2>

                {/* {A message to check and click the email to login to our website} */}
                <p className="text-gray-600 text-center mb-6">
                  {`Please check your email ${email} and click the link to login to our website.`}
                </p>
                <button
                  type="submit"
                  className="w-full p-3 rounded-lg border border-gray-200 text-white hover:bg-red-600 transition-colors bg-red-500"
                  onClick={handleResendEmail}
                >
                  Resend Link
                </button>
                {/* {Go back button which deactivates this pop up and activates isopen popup } */}
                {/* <button
            className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
           }
          >
            Go back
          </button> */}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
