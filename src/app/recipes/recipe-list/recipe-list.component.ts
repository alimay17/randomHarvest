import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // properties
  recipes!: Recipe[];
  private subscription!: Subscription;

  // constructors
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  // implements
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (newRecipes: Recipe[]) => {
        this.recipes = newRecipes;
      }
    );
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  // methods
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}