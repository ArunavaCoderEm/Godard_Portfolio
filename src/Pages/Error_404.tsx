import React from 'react';
import { Link } from 'react-router-dom';

export default function Error_404(): React.ReactNode {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0F0F] to-[#0F0F0F]/60 mukta text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-4xl mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 text-center max-w-lg">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-[#6EACDA] text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-[#6EACDA]/80 transition-colors duration-300 font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}
