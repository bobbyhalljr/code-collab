// components/auth/RegistrationForm.tsx
import React from 'react';
import { supabase } from '../../utils/supabase'; // Make sure to import your Supabase instance
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const RegistrationForm: React.FC = () => {
  const handleGitHubRegister = async () => {
    // Handle GitHub registration logic using Supabase
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      console.error('GitHub Sign In Error:', error.message);
    } else {
      console.log('GitHub Sign In Success:', data);
    }
  };

  const handleGoogleRegister = async () => {
    // Handle Google registration logic using Supabase
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Google Sign In Error:', error.message);
    } else {
      console.log('Google Sign In Success:', data);
    }
  };

  const handleEmailMagicLinkRegister = async () => {
    // Handle email registration logic using Supabase
    const { data, error } = await supabase.auth.signInWithOtp({
      email: 'user@example.com', // Replace with the user's email
    });

    if (error) {
      console.error('Email Sign In Error:', error.message);
    } else {
      console.log('Email Sign In Success:', data);
    }
  };

  return (
    <div className="max-w-md w-[80%] mx-auto mt-24 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-3xl p-2 text-center font-bold mb-3 ">Sign in to your account</h2>
      <h2 className="text-base text-gray-500 text-center font-medium">Sign in with github or google</h2>
      <div className="max-w-md mx-auto p-4 bg-white mt-3 rounded-md">
      <form className="space-y-4">
      <div className="space-y-4">
        {/* GitHub Registration */}
        <button
          className="bg-gray-800 flex justify-center text-white w-full p-3 shadow-md rounded-md hover:bg-gray-900"
          onClick={handleGitHubRegister}
        >
        <FaGithub className='w-6 h-6 mr-3' />
          Sign in with GitHub
        </button>
      </div>
        <div>
            {/* Google Registration */}
            <button
            className="bg-emerald-500 flex justify-center text-white w-full shadow-md my-4 p-3 rounded-md hover:bg-emerald-600"
            onClick={handleGoogleRegister}
            >
                <FaGoogle className='w-6 h-6 mr-3' />
                Register with Google
            </button>
        </div>
        
        <h2 className="text-2xl text-center text-gray-700 font-semibold mb-4">or</h2>
      <h2 className="text-base text-center text-gray-500 font-medium pb-4">Sign in with a link sent to your email address</h2>

        <div className=''>
          <label htmlFor="email" className="block text-sm font-medium text-gray-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder='Enter email here'
            className="mt-1 p-2 w-full border-2 border-gray-200 rounded-md"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
            {/* Email Registration with Magic Link */}
            <button
            className="bg-blue-500 flex justify-center shadow-md text-white w-full mt-6 p-3 rounded-md hover:bg-blue-600"
            onClick={handleEmailMagicLinkRegister}
            >
            <MdEmail className='w-6 h-6 mr-3'/>
            Register with Email (Magic Link)
            </button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
