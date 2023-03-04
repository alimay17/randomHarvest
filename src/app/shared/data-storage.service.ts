import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  // properties
  urlBase = 'https://randomharvest-62f95-default-rtdb.firebaseio.com/'

  // constructor
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  // methods
  fetchAllItems() {
    const urlFinal = this.urlBase + 'recipes.json';

    return this.http.get<Recipe[]>(urlFinal)
    .pipe(
      map((responseData: any) =>{
        return responseData.map((recipe: Recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients: []
          }
        });
      }),
      tap((recipes: Recipe[])=>{
        this.recipeService.setRecipes(recipes)
      })
    )
  }

  fetchItem() {

  }

  putAllItems(){
    const recipes = this.recipeService.getRecipes();
    const urlFinal = this.urlBase + 'recipes.json';

    this.http.put(urlFinal, recipes).subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

  postItem(){

  }

  deleteItem(){
    
  }

  deleteAllData(){

  }
}
