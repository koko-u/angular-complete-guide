import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../../../models/recipe.model'

@Component({
  selector: 'acg-recipe-item[recipe]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input()
  recipe?: Recipe

  constructor() {}
}
