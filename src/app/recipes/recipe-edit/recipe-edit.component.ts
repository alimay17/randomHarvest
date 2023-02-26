import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  
  // properties
  id!: number;
  editMode = false;

  // form
  recipeForm!: FormGroup;

  // constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ){}

  // implements
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    console.log(this.recipeForm.value);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else this.recipeService.addRecipe(this.recipeForm.value)
    this.onCancel();
    console.log(this.recipeService.getRecipes());
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    // default values
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let recipeIngredients = new FormArray([
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    ]);

    // check edit mode
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']){
        recipe['ingredients'].forEach(i => {
          console.log(i); 
          recipeIngredients.patchValue([{'name': i.name, 'amount': i.amount}]);
        });
      }
    }
    // assign values
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  getControls(){
    // console.log((<FormArray>this.recipeForm.get('ingredients')).controls);
    return(<FormArray>this.recipeForm.get('ingredients')).controls;
  }


}
