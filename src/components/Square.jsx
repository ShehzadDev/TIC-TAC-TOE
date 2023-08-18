import React from 'react';

function Square(props) {
  return (
    <button
      className="bg-blue-400 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 p-0 rounded-lg transition-transform transform hover:scale-110 hover:bg-blue-500 active:bg-blue-600 focus:outline-none"
      onClick={props.onClick}
    >
      <span className="text-white text-7xl font-bold">{props.value}</span>
    </button>
  );
}

export default Square;
