import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShoppingListComponent } from './shopping-list.component'
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper'
import { IngredientService } from '../ingredient.service'

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ShoppingListComponent],
  providers: [FormBuilderTypeSafe, IngredientService],
})
export class ShoppingListModule {}
