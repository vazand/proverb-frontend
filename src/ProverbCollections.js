import React from "react";

function ProverbCollections({ collectionOfProverb }) {
  //console.log(collectionOfProverb.Proverbs[1]);
  return (
    <div className="bg-orange-100">
      <ul className="grid grid-flow-row grid-cols-1 ">
        {collectionOfProverb.map((item, index) => (
          <li className="bg-orange-200 p-1 m-1 rounded-md" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProverbCollections;
