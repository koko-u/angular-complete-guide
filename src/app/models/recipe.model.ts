import { IRecipe } from './recipe.interface'
import { Ingredient } from './ingredient.model'

/**
 * recipe representation
 */
export class Recipe implements IRecipe {
  /**
   * recipe's name
   */
  name: string

  /**
   * recipe's description
   */
  description: string

  /**
   * recipe's image path (local assets path)
   */
  imagePath: string

  /**
   * recipe's ingredient list
   */
  ingredients: Ingredient[]

  /**
   * the constructor
   *
   * @param recipe recipe object expression
   */
  constructor(recipe: IRecipe) {
    this.name = recipe.name
    this.description = recipe.description
    this.imagePath = recipe.imagePath
    this.ingredients = recipe.ingredients.map(
      (ingredient) => new Ingredient(ingredient)
    )
  }
}
