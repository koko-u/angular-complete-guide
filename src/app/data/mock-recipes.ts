import { Recipe } from '../models/recipe.model'

export const mockRecipes: Recipe[] = [
  new Recipe({
    name: 'A Test Recipe',
    description: 'This is simply a test.',
    imagePath: 'assets/images/recipe1.jpg',
    ingredients: [
      { id: 6, name: 'Onion', amount: 3 },
      { id: 5, name: 'Buns', amount: 6 },
    ],
  }),
  new Recipe({
    name: 'Next Nice Recipe',
    description: 'This is awesome good recipe test.',
    imagePath: 'assets/images/recipe2.jpg',
    ingredients: [
      { id: 3, name: 'Meat', amount: 1 },
      { id: 4, name: 'French Fries', amount: 20 },
    ],
  }),
  new Recipe({
    name: 'Last Easy Recipe',
    description: 'This is tiny easy to make test.',
    imagePath: 'assets/images/recipe3.jpg',
    ingredients: [
      { id: 5, name: 'Buns', amount: 2 },
      { id: 3, name: 'Meat', amount: 1 },
    ],
  }),
]
