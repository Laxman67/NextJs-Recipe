import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const RecipeList = ({ recipeList }) => {
  return (
    <div className="p-4 mx-auto lg:w-[98%]  md:max-w-4xl sm:max-w-full">
      <div className="text-4xl font-bold text-gray-800 mb-12">
        <>Recipes</>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3 lg:gap-9 lg:p-4 ">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => {
              return (
                <Link href={`recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.07] transition-all">
                      <div className="w-full aspect-h-8 lg:h-80 ">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <CardDescription>
                        <strong>Name:{recipe.name}</strong>
                      </CardDescription>
                      <div className="flex justify-between">
                        <p>
                          <b>Rating</b>: {recipe.rating}
                        </p>
                        <strong className="text-gray-700">
                          {recipe.cuisine}
                        </strong>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default RecipeList;
