// angular imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// app imports
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

// app imports

// routing
const appRoutes: Routes = [
  // recipes
  {path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]},

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