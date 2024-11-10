import React from 'react';
import Header from './components/Header';
import SwapInterface from './components/SwapInterface';

function App() {
  return (
    <div className="min-h-screen bg-[#191B1F] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-start pt-6">
          <SwapInterface />
        </div>
      </main>
    </div>
  );
}

export default App;