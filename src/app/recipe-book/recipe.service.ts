import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Recipe } from '../models/recipe.model'
import { mockRecipes } from '../data/mock-recipes'

@Injectable()
export class RecipeService {
  private currentRecipeSubject$: BehaviorSubject<Recipe | undefined>

  /**
   * all recipes (mocking data)
   */
  get recipes$(): Observable<Recipe[]> {
    return of(mockRecipes)
  }

  /**
   * selected recipe
   *
   * @remarks if no recipes selected then the value is undefined
   */
  get currentRecipe$(): Observable<Recipe | undefined> {
    return this.currentRecipeSubject$.asObservable()
  }

  /**
   * the constructor
   */
  constructor() {
    this.currentRecipeSubject$ = new BehaviorSubject<Recipe | undefined>(
      undefined
    )
  }

  /**
   * select the recipe
   * @param recipe selected recipe
   */
  select(recipe: Recipe) {
    this.currentRecipeSubject$.next(recipe)
  }
}
