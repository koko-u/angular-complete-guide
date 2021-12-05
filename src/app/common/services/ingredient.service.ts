import { Injectable } from '@angular/core'
import { BehaviorSubject, concatMap, EMPTY, map, Observable, of } from 'rxjs'
import { Ingredient } from '../../models/ingredient.model'
import { mockIngredients } from '../../data/mock-ingredients'
import { IngredientForm } from '../../models/ingredient.form'
import { getMaxId, mergeById } from '../util'
import { RecipeService } from './recipe.service'

@Injectable()
export class IngredientService {
  private ingredientsSubject$ = new BehaviorSubject<Ingredient[]>([])
  private currentId$ = new BehaviorSubject<number>(0)

  /**
   * all ingredients
   */
  get ingredients$(): Observable<Ingredient[]> {
    return this.ingredientsSubject$.asObservable()
  }

  /**
   * the constructor
   *
   * - create ingredients Behavior Subject
   * - connect ingredients Subject to maxId observable
   */
  constructor(private recipeService: RecipeService) {
    this.ingredientsSubject$ = new BehaviorSubject<Ingredient[]>(
      mockIngredients
    )
    this.ingredientsSubject$.pipe(map(getMaxId)).subscribe(this.currentId$)
  }

  /**
   * clear ingredients list
   */
  clear(): void {
    this.ingredientsSubject$.next([])
  }

  /**
   * add new ingredient
   *
   * @param ingredientForm ingredient name and amount
   */
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

  /**
   * delete ingredient by it's id
   *
   * @param id ingredient's id for deletion
   */
  deleteById(id: number) {
    const ingredients = this.ingredientsSubject$.value.filter(
      (ingredient) => ingredient.id !== id
    )
    this.ingredientsSubject$.next(ingredients)
  }

  /**
   * add ingredients from currentRecipe which holds RecipeService
   *
   */
  addCurrentRecipe() {
    this.recipeService.currentRecipe$
      .pipe(
        concatMap((recipe) => {
          if (recipe === undefined) {
            return EMPTY
          } else {
            return of(recipe.ingredients)
          }
        }),
        map((ingredients) =>
          mergeById(this.ingredientsSubject$.value, ingredients)
        )
      )
      .subscribe(this.ingredientsSubject$)
      .unsubscribe()
  }
}
