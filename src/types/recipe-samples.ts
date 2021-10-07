import { Recipe } from "./recipe";

export function createRecipeSamples() {
  return [
    createRecipe({
      description: "Desc 1",
      title: "Recipe 1",
      creationDate: new Date("2018-04-11"),
    }),
    createRecipe({
      description: "Desc 2",
      title: "Recipe 2",
      creationDate: new Date("2018-04-15"),
    }),
    createRecipe({
      description: "Desc 3",
      title: "Recipe 3",
      creationDate: new Date(),
    }),
  ];
}

function createRecipe(recipeData: Partial<Recipe>) {
  return Object.assign(new Recipe(), recipeData);
}
