import { Recipe } from '../models/recipe.model'

export const mockRecipes: Recipe[] = [
  new Recipe({
    name: 'A Test Recipe',
    description: 'This is simply a test.',
    imagePath: 'assets/images/recipe1.jpg',
  }),
  new Recipe({
    name: 'Next Nice Recipe',
    description: 'This is awesome good recipe test.',
    imagePath: 'assets/images/recipe2.jpg',
  }),
  new Recipe({
    name: 'Last Easy Recipe',
    description: 'This is tiny easy to make test.',
    imagePath: 'assets/images/recipe3.jpg',
  }),
]
