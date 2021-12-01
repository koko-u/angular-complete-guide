import { Component, OnInit } from '@angular/core'
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'acg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.currentRecipe$.subscribe(
      (currentRecipe) => (this.recipe = currentRecipe)
    )
  }
}
