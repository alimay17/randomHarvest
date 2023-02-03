import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // constructors
  constructor() { }

  // properties
  private recipes: Recipe[] = [
    new Recipe('Jollof Rice', 'Most Excellent Rice Dish', 'https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/05/IMG_2943-2.jpg'),
    new Recipe('Jollof Rice2', 'Most Excellent Rice Dish', 'https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/05/IMG_2943-2.jpg')
  ];
  recipeSelected = new EventEmitter<Recipe>();


  // methods
  getRecipes() {
    return this.recipes.slice();
  }

}
