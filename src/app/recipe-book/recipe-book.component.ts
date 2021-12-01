import { Component, OnInit } from '@angular/core'
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'acg-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
})
export class RecipeBookComponent {
  currentRecipe?: Recipe

  constructor() {}

  onSelectRecipe(recipe: Recipe) {
    this.currentRecipe = recipe
  }
}
