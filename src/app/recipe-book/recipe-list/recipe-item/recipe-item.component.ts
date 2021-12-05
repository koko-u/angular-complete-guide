import { Component, Input } from '@angular/core'
import { Recipe } from '../../../models/recipe.model'
import { RecipeService } from '../../recipe.service'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'acg-recipe-item[recipe]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  private _recipe: Recipe | undefined

  /**
   * the recipe display in the recipe list
   */
  get recipe(): Recipe {
    if (this._recipe === undefined) {
      throw new Error('no recipe attribute')
    }
    return this._recipe
  }

  /**
   * set the recipe to display from parent list component
   * @param value
   */
  @Input()
  set recipe(value: Recipe) {
    this._recipe = value
  }

  /**
   * current row is active or not
   */
  get active$(): Observable<boolean> {
    return this.recipeService.currentRecipe$.pipe(
      map((currentRecipe) => currentRecipe === this.recipe)
    )
  }

  constructor(private recipeService: RecipeService) {}

  /**
   * select this recipe row
   */
  onClick() {
    this.recipeService.select(this.recipe)
  }
}
