
import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <svg
    className="animate-spin h-12 w-12 text-indigo-400 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export const GenerateIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3c.3 0 .5.1.8.4l6.4 6.4c.2.3.4.5.4.8 0 .3-.1.5-.4.8L13 18.2c-.3.2-.5.4-.8.4-.3 0-.5-.1-.8-.4l-6-6c-.3-.2-.4-.5-.4-.8s.1-.5.4-.8l6-6c.3-.3.5-.4.8-.4z" />
    <path d="M12 21v-1.5M12 4.5V3" />
    <path d="m4.929 4.929-.92.92M19.07 19.07l.92-.92" />
    <path d="M3 12h1.5M21 12h-1.5" />
    <path d="m4.929 19.07.92-.92M19.07 4.929l-.92.92" />
  </svg>
);

export const ImageIcon: React.FC = () => (
    <svg 
        className="h-16 w-16 text-gray-600 mx-auto"
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
);
