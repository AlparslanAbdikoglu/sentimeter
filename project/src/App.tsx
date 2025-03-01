import React from 'react';
import SentimentAnalyzer from './components/SentimentAnalyzer';
import HoverNavbar from './components/HoverNavbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <HoverNavbar />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Sentiment Analysis Tool</h1>
          <p className="text-gray-600 mt-2">Analyze the sentiment of any text with this simple tool so far only english based text can be analyzed</p>
        </header>
        
        <SentimentAnalyzer />
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <div className="flex items-center justify-center">
           
          </div>
          <p className="mt-2">Built with React and sentiment.js</p>
        </footer>
      </div>
    </div>
  );
}

export default App;