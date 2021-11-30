import { Component, OnInit } from '@angular/core'
import { Ingredient } from '../models/ingredient.model'
import { of } from 'rxjs'
import { mockIngredients } from '../data/mock-ingredients'

@Component({
  selector: 'acg-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor() {}

  ngOnInit(): void {
    of(mockIngredients).subscribe(
      (ingredients) => (this.ingredients = ingredients)
    )
  }
}
