
import React from 'react';
import { GenerateIcon } from './icons';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <label htmlFor="prompt-textarea" className="text-lg font-semibold text-gray-300">
        Enter your creative prompt
      </label>
      <div className="relative">
        <textarea
          id="prompt-textarea"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., A majestic lion wearing a crown, sitting on a throne in a futuristic city"
          className="w-full h-32 p-4 pr-32 bg-gray-800 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-300"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="absolute bottom-3 right-3 flex items-center justify-center px-4 py-2 bg-indigo-600 rounded-md text-white font-semibold shadow-lg hover:bg-indigo-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100"
        >
          <GenerateIcon />
          <span className="ml-2">{isLoading ? 'Generating...' : 'Generate'}</span>
        </button>
      </div>
       <p className="text-xs text-gray-500 text-right">
        Tip: Press <kbd className="font-sans px-1.5 py-0.5 border border-gray-600 rounded">Ctrl</kbd> + <kbd className="font-sans px-1.5 py-0.5 border border-gray-600 rounded">Enter</kbd> to generate.
      </p>
    </div>
  );
};
