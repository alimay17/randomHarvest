import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  // events
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  // properties
  private ingredients: Ingredient[] = [
    new Ingredient('Rice', 1),
    new Ingredient('Spice', 7)
  ];

  // methods
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
