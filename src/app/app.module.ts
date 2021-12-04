import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { ShoppingListModule } from './shopping-list/shopping-list.module'
import { RecipeBookModule } from './recipe-book/recipe-book.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './common/header/header.component';
import { CustomDirectiveModule } from './custom-directive/custom-directive.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    RecipeBookModule,
    CustomDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
