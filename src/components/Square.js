import React, { useState } from 'react'

export default function Square({value,onSquareClick}) {
    // const [value, setValue] = useState(null);

  
  return (
    <>
   <div className="square">
   <button onClick={onSquareClick} className="square">
          {value}
        </button>
      </div>
    </>
  );
}
