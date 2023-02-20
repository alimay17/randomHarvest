import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{

  // properties
  subscription!: Subscription;
  editMode = false;
  itemIndex!: number;
  editedItem!: Ingredient;

  // form
  @ViewChild('f') slForm!: NgForm;
  
  // constructors
  constructor(private slService: ShoppingListService){}

  // implements
  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.itemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);

        // load ingredient to form
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // methods
  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(this.editMode) {
      this.slService.updateIngredient(this.itemIndex, newIngredient);
    } else {
    this.slService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.slService.deleteIngredient(this.itemIndex);
    this.onClear();
  }
}
