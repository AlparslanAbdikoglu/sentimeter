import React, { useState } from 'react';
import Sentiment from 'sentiment';
import { SentimentResult } from '../types';
import { ThumbsUp, ThumbsDown, Meh, BarChart2, List, MessageSquare, Save } from 'lucide-react';
import LoginModal from './LoginModal';

const SentimentAnalyzer: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [activeTab, setActiveTab] = useState<'result' | 'details'>('result');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const analyzeSentiment = () => {
    if (!text.trim()) return;
    
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    setResult(result);
  };

  const handleSave = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogin = (email: string, password: string) => {
    // Mock login functionality
    console.log('Logging in with:', email, password);
    // In a real app, you would authenticate the user here
    
    // Close the modal
    setIsLoginModalOpen(false);
    
    // Show a success message
    alert('Analysis saved successfully!');
  };

  const getSentimentEmoji = () => {
    if (!result) return null;
    
    if (result.score > 3) return <ThumbsUp className="w-12 h-12 text-green-500" />;
    if (result.score < -3) return <ThumbsDown className="w-12 h-12 text-red-500" />;
    return <Meh className="w-12 h-12 text-yellow-500" />;
  };

  const getSentimentLabel = () => {
    if (!result) return '';
    
    if (result.score > 3) return 'Positive';
    if (result.score < -3) return 'Negative';
    return 'Neutral';
  };

  const getSentimentColor = () => {
    if (!result) return 'bg-gray-100';
    
    if (result.score > 3) return 'bg-green-100 border-green-300';
    if (result.score < -3) return 'bg-red-100 border-red-300';
    return 'bg-yellow-100 border-yellow-300';
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Sentiment Analysis Tool</h1>
      
      <div className="mb-4">
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter text to analyze:
        </label>
        <textarea
          id="text-input"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here..."
        />
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={analyzeSentiment}
          className="flex-1 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Analyze Sentiment
        </button>
        
        {result && (
          <button
            onClick={handleSave}
            className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Analysis
          </button>
        )}
      </div>
      
      {result && (
        <div className="mt-6">
          <div className="flex border-b">
            <button
              className={`flex items-center px-4 py-2 ${activeTab === 'result' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('result')}
            >
              <BarChart2 className="w-4 h-4 mr-2" />
              Result
            </button>
            <button
              className={`flex items-center px-4 py-2 ${activeTab === 'details' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('details')}
            >
              <List className="w-4 h-4 mr-2" />
              Details
            </button>
          </div>
          
          {activeTab === 'result' && (
            <div className={`mt-4 p-4 rounded-lg border ${getSentimentColor()}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Sentiment: {getSentimentLabel()}</h3>
                  <p className="text-gray-700">Score: {result.score}</p>
                  <p className="text-gray-700">Comparative: {result.comparative.toFixed(3)}</p>
                </div>
                <div>{getSentimentEmoji()}</div>
              </div>
            </div>
          )}
          
          {activeTab === 'details' && (
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-md font-semibold flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Words Analyzed
                </h3>
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  {result.tokens.length > 0 ? result.tokens.join(', ') : 'No words detected'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-md font-semibold text-green-600 flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Positive Words
                  </h3>
                  <div className="mt-2 p-3 bg-green-50 rounded-md">
                    {result.positive.length > 0 ? result.positive.join(', ') : 'None'}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-red-600 flex items-center">
                    <ThumbsDown className="w-4 h-4 mr-2" />
                    Negative Words
                  </h3>
                  <div className="mt-2 p-3 bg-red-50 rounded-md">
                    {result.negative.length > 0 ? result.negative.join(', ') : 'None'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLogin={handleLogin}
      />
    </div>
  );
};

export default SentimentAnalyzer;