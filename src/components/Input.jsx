import React from "react";

export default function Input() {
  return (
    <div className="h-32 rounded-md shadow-md bg-white w-8/12 mt-20 px-10">
      <h2 className="text-xl mt-6">Search Your Favorite Cocktail</h2>
      <input
        type="text"
        className="bg-gray-300 rounded-sm pl-4 h-8 mt-5 w-full"
      />
    </div>
  );
}
