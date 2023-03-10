import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{

  // properties

  // constructor
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) { }

  // methods
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0 ){
      return this.dataStorageService.fetchAllItems(); 
    } else {
      return recipes;
    }
  }
}
