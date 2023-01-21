import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const iName = this.nameInputRef.nativeElement.value;
    const iAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(iName, iAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}
