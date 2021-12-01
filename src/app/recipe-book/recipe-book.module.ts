import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component'
import { RecipeBookComponent } from './recipe-book.component'
import { RecipeService } from './recipe.service'

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeBookComponent,
  ],
  imports: [CommonModule],
  exports: [RecipeBookComponent],
  providers: [RecipeService],
})
export class RecipeBookModule {}
