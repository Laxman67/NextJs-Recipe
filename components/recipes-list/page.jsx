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
    <div className="p-4 mx-auto lg:max-w-lg  md:max-w-4xl sm:max-w-full">
      <div className="text-4xl font-bold text-gray-800 mb-12">
        <>Recipes</>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => {
              return (
                <Link href="/">
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div></div>
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
