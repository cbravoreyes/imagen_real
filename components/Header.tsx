
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-6 border-b border-gray-700">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
        AI Image Generator
      </h1>
      <p className="text-gray-400 mt-2">Bring your imagination to life with Imagen 4</p>
    </header>
  );
};
