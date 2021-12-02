import { Ingredient } from '../models/ingredient.model'

export const mockIngredients: Ingredient[] = [
  new Ingredient({
    id: 1,
    name: 'Apples',
    amount: 5,
  }),
  new Ingredient({
    id: 2,
    name: 'Tomatoes',
    amount: 10,
  }),
]
