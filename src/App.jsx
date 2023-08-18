import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-10">TIC TAC TOE</h1>
      <Board />
    </div>
  );
}

export default App;
