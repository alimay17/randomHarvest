import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // properties
  recipes!: Recipe[];

  // constructors
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  // implements
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // methods
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}