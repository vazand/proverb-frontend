import React from "react";

function Contents({ currentProverb }) {
  return (
    <div className="grid h-dvh  bg-orange-300">
      <p className="text-center m-auto "> {currentProverb}</p>
    </div>
  );
}


export default Contents;
