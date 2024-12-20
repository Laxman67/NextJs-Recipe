import React from 'react';

const RecipeItemDetails = ({ detail }) => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-md">
      <img
        src={detail.image}
        alt={detail.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{detail.name}</h2>
        <p className="text-gray-600 mb-4">
          <strong>Prep Time:</strong> {detail.prepTimeMinutes} minutes
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Cook Time:</strong> {detail.cookTimeMinutes} minutes
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Servings:</strong> {detail.servings}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Difficulty:</strong> {detail.difficulty}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Cuisine:</strong> {detail.cuisine}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Calories per Serving:</strong> {detail.caloriesPerServing}
        </p>
        <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
        <ul className="list-disc pl-4 mb-4">
          {detail.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mb-2">Instructions:</h3>
        <ol className="list-decimal pl-4">
          {detail.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600 mb-2">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeItemDetails;
