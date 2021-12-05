import { Component } from '@angular/core'
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../recipe.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'acg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  get currentRecipe$(): Observable<Recipe | undefined> {
    return this.recipeService.currentRecipe$
  }

  constructor(private recipeService: RecipeService) {}
}
