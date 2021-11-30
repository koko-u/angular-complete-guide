import { IRecipe } from './recipe.interface'

export class Recipe implements IRecipe {
  name: string
  description: string
  imagePath: string

  constructor(recipe: IRecipe) {
    this.name = recipe.name
    this.description = recipe.description
    this.imagePath = recipe.imagePath
  }
}
