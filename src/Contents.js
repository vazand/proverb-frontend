import React from "react";

function Contents({ currentProverb }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="bg-orange-300 text-center"> {currentProverb}</p>
    </div>
  );
}

export default Contents;
