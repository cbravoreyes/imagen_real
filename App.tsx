
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { ImageDisplay } from './components/ImageDisplay';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const initialPrompt = "tres estudiantes universitarios, un varón y dos mujeres, están sentados frente a una mesa, una mujer come una hamburguesa, la otra se pinta las uñas, el varón está dormido sobre la mesa";
  const [prompt, setPrompt] = useState<string>(initialPrompt);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt to generate an image.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    try {
      const imageUrl = await generateImage(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to generate image: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center p-4">
      <div className="w-full max-w-4xl flex flex-col min-h-[95vh]">
        <Header />
        <main className="flex-grow flex flex-col gap-8 py-8">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerateImage}
            isLoading={isLoading}
          />
          <ImageDisplay
            image={generatedImage}
            isLoading={isLoading}
            error={error}
          />
        </main>
        <footer className="text-center py-4 text-gray-500 text-sm">
          <p>Powered by Google Gemini & Imagen 4</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
