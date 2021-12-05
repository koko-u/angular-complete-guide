import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { ShoppingListModule } from './shopping-list/shopping-list.module'
import { RecipeBookModule } from './recipe-book/recipe-book.module'
import { CustomDirectiveModule } from './custom-directive/custom-directive.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './common/header/header.component'
import { RecipeService } from './common/services/recipe.service'
import { IngredientService } from './common/services/ingredient.service'

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    RecipeBookModule,
    CustomDirectiveModule,
  ],
  providers: [RecipeService, IngredientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
