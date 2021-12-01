import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Recipe } from '../../models/recipe.model'
import { of } from 'rxjs'
import { mockRecipes } from '../../data/mock-recipes'

@Component({
  selector: 'acg-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []

  @Output()
  selectRecipe = new EventEmitter<Recipe>()

  @Input()
  currentRecipe?: Recipe

  constructor() {}

  ngOnInit(): void {
    of(mockRecipes).subscribe((recipes) => (this.recipes = recipes))
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectRecipe.emit(recipe)
  }
}
