import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  // properties
  ingredients!: Ingredient[];

  // events/subjects
  private slChangeSub!: Subscription;

  // constructors
  constructor(private slService: ShoppingListService){}

  // implements
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slChangeSub = this.slService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.slChangeSub.unsubscribe();
  }

  // methods
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

}
