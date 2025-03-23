// src/components/AuthLayout.js
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Auth Form Container */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                {children} {/* Dynamic content (login, register) will go here */}
            </div>

        </div>
    );
};

export default AuthLayout;
