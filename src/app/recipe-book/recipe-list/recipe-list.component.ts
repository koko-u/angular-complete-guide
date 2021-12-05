import { Component } from '@angular/core'
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../recipe.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'acg-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  /**
   * recipe list to display
   */
  get recipes$(): Observable<Recipe[]> {
    return this.recipeService.recipes$
  }

  constructor(private recipeService: RecipeService) {}
}
