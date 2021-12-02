import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable, of } from 'rxjs'
import { Ingredient } from './models/ingredient.model'
import { mockIngredients } from './data/mock-ingredients'
import { IngredientForm } from './models/ingredient.form'

function getMaxId(ingredients: Ingredient[]): number {
  return ingredients.reduce((prev, current) => {
    if (current.id > prev) {
      return current.id
    } else {
      return prev
    }
  }, 0)
}

@Injectable()
export class IngredientService {
  private ingredientsSubject$ = new BehaviorSubject<Ingredient[]>([])
  private currentId$ = new BehaviorSubject<number>(0)

  constructor() {
    this.ingredientsSubject$ = new BehaviorSubject<Ingredient[]>(
      mockIngredients
    )
    this.ingredientsSubject$.pipe(map(getMaxId)).subscribe(this.currentId$)
  }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.ingredientsSubject$.asObservable()
  }

  clear(): void {
    this.ingredientsSubject$.next([])
  }

  add(ingredientForm: IngredientForm): void {
    const ingredient = new Ingredient({
      id: this.currentId$.value + 1,
      ...ingredientForm,
    })
    this.ingredientsSubject$.next([
      ...this.ingredientsSubject$.value,
      ingredient,
    ])
  }

  deleteById(id: number) {
    const ingredients = this.ingredientsSubject$.value.filter(
      (ingredient) => ingredient.id !== id
    )
    this.ingredientsSubject$.next(ingredients)
  }
}