import { Resolver, ResolverInterface, Query, Arg } from "type-graphql";
import { Recipe } from "./recipe";
import { createRecipeSamples } from "./recipe-samples";

@Resolver((of) => Recipe)
export class RecipeResolver {
  //implements ResolverInterface<Recipe> {
  private readonly items: Recipe[] = createRecipeSamples();

  @Query((returns) => Recipe, { nullable: true })
  async recipe(@Arg("title") title: string): Promise<Recipe | undefined> {
    return await this.items.find((recipe) => recipe.title === title);
  }

  @Query((returns) => [Recipe], {
    description: "Get all the recipes from around the world ",
  })
  async recipes(): Promise<Recipe[]> {
    return await this.items;
  }
}
