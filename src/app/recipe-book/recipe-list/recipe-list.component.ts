import { Component, OnInit } from '@angular/core'
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'acg-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getAllRecipes()
      .subscribe((recipes) => (this.recipes = recipes))
  }
}
