import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Jollof Rice', 'Most Excellent Rice Dish', 'https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/05/IMG_2943-2.jpg'),
    new Recipe('Jollof Rice2', 'Most Excellent Rice Dish', 'https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/05/IMG_2943-2.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
