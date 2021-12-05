import { Component } from '@angular/core'
import { Ingredient } from '../models/ingredient.model'
import { IngredientService } from '../common/services/ingredient.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'acg-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  get ingredients$(): Observable<Ingredient[]> {
    return this.ingredientService.ingredients$
  }

  constructor(private ingredientService: IngredientService) {}

  delete(ingredient: Ingredient) {
    this.ingredientService.deleteById(ingredient.id)
  }
}
