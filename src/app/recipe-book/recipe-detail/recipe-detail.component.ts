import { Component } from '@angular/core'
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../common/services/recipe.service'
import { Observable } from 'rxjs'
import { IngredientService } from '../../common/services/ingredient.service'

@Component({
  selector: 'acg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  get currentRecipe$(): Observable<Recipe | undefined> {
    return this.recipeService.currentRecipe$
  }

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService
  ) {}

  /**
   * add current recipe's ingredients into shopping list
   * @param event
   */
  addIngredientsToShoppingList(event: MouseEvent) {
    event.preventDefault()

    this.ingredientService.addCurrentRecipe()
  }
}
