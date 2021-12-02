import { IIngredient } from './ingredient.interface'

export class Ingredient implements IIngredient {
  id: number
  name: string
  amount: number

  constructor(ingredient: IIngredient) {
    this.id = ingredient.id
    this.name = ingredient.name
    this.amount = ingredient.amount
  }
}
