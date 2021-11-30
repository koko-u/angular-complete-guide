import { IIngredient } from './ingredient.interface'

export class Ingredient implements IIngredient {
  name: string
  amount: number

  constructor(ingredient: IIngredient) {
    this.name = ingredient.name
    this.amount = ingredient.amount
  }
}
