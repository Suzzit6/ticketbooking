import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleOAuth } from './googleAuth';
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const LoginPopup = ({ isOpen, onClose }) => {
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
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Logo */}
            <div className="mb-8 ">
              <img
                src="/api/placeholder/120/40"
                alt="Logo"
                className="h-10"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex justify-center">
              Login or Sign up to Logo
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
            >
              Continue with email
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;

