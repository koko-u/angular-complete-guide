import { Component } from '@angular/core'
import {
  FormBuilderTypeSafe,
  FormGroupTypeSafe,
} from 'angular-typesafe-reactive-forms-helper'
import { FormControl } from '@angular/forms'
import { IngredientService } from '../../ingredient.service'
import { IngredientForm } from '../../models/ingredient.form'

@Component({
  selector: 'acg-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent {
  shoppingForm: FormGroupTypeSafe<IngredientForm>

  constructor(
    private formBuilder: FormBuilderTypeSafe,
    private ingredientService: IngredientService
  ) {
    this.shoppingForm = this.formBuilder.group<IngredientForm>({
      name: new FormControl(''),
      amount: new FormControl(0),
    })
  }

  add() {
    this.ingredientService.add(this.shoppingForm.value)
  }

  clear() {
    this.ingredientService.clear()
  }
}
