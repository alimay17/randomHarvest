// angular imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// app imports
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

// app imports

// routing
const appRoutes: Routes = [
  // recipes
  {path: 'recipes', component: RecipesComponent},

  // shopping
  {path: 'shopping-list', component: ShoppingListComponent},

  // default
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},

  // not found
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'You have an error'}},
  {path: '**', redirectTo: '/not-found'}
]

// main config
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}