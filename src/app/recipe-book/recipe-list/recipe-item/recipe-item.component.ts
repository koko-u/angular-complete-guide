import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Recipe } from '../../../models/recipe.model'

@Component({
  selector: 'acg-recipe-item[recipe]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input()
  recipe?: Recipe

  @Input()
  active: boolean = false

  @Output()
  selectRecipe = new EventEmitter<Recipe>()

  constructor() {}

  onClick() {
    if (this.recipe) {
      this.selectRecipe.emit(this.recipe)
    }
  }
}
