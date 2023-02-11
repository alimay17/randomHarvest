import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  // constructors
  constructor(private slService: ShoppingListService){}

  // properties
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  // methods
  onAddItem(){
    const iName = this.nameInputRef.nativeElement.value;
    const iAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(iName, iAmount);

    this.slService.addIngredient(newIngredient);
  }
}
