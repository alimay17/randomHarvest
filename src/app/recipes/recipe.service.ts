import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // constructors
  constructor() { }

  // properties
  private recipes: Recipe[] = [
    new Recipe(
      'Jollof Rice', 
      'Most Excellent Rice Dish', 
      'https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/05/IMG_2943-2.jpg',
      [new Ingredient('rice', 12)]
      ),
    new Recipe(
      'Jollof Rice2', 
      'Most Excellent Rice Dish', 
      'https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/05/IMG_2943-2.jpg',
      [new Ingredient('beans', 12)]
      )
  ];

  // methods
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
