import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../../models/recipe.model'

@Component({
  selector: 'acg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input()
  recipe?: Recipe

  constructor() {}
}
