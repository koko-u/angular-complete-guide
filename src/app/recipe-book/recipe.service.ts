import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Recipe } from '../models/recipe.model'
import { mockRecipes } from '../data/mock-recipes'

@Injectable()
export class RecipeService {
  private currentRecipeSubject$: BehaviorSubject<Recipe | undefined>
  public get currentRecipe$(): Observable<Recipe | undefined> {
    return this.currentRecipeSubject$.asObservable()
  }

  constructor() {
    this.currentRecipeSubject$ = new BehaviorSubject<Recipe | undefined>(
      undefined
    )
  }

  select(recipe: Recipe) {
    this.currentRecipeSubject$.next(recipe)
  }

  getAllRecipes(): Observable<Recipe[]> {
    return of(mockRecipes)
  }
}
