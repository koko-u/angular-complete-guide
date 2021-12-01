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
  @Input()
  recipe?: Recipe

  active: Observable<boolean>

  constructor(private recipeService: RecipeService) {
    this.active = recipeService.currentRecipe$.pipe(
      map((currentRecipe) => currentRecipe === this.recipe)
    )
  }

  onClick() {
    if (this.recipe) {
      this.recipeService.select(this.recipe)
    }
  }
}
