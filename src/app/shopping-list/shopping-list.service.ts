import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  // events
  ingredientsChanged = new Subject<Ingredient[]>();

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
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
