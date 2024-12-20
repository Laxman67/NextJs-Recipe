import React from 'react';
import RecipeItemDetails from '@/components/recipeItemDetails/RecipeItemDetails';

async function fetchRecipeDetail(currentRecipeId) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error Occured :${error}`);
  }
}
const RecipesDetail = async ({ params }) => {
  const param = await params;
  const detail = await fetchRecipeDetail(param.details);

  return (
    <div>
      <RecipeItemDetails detail={detail} />
    </div>
  );
};

export default RecipesDetail;
