/**
 * recipe property interface
 */
import { IIngredient } from './ingredient.interface'

export interface IRecipe {
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
  ingredients: IIngredient[]
}
