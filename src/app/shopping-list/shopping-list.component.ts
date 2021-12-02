import { Component, OnInit } from '@angular/core'
import { Ingredient } from '../models/ingredient.model'
import { IngredientService } from '../ingredient.service'
import { EMPTY, Observable } from 'rxjs'

@Component({
  selector: 'acg-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>

  constructor(private ingredientService: IngredientService) {
    this.ingredients$ = this.ingredientService.getAllIngredients()
  }

  ngOnInit(): void {}

  delete(ingredient: Ingredient) {
    this.ingredientService.deleteById(ingredient.id)
  }
}
