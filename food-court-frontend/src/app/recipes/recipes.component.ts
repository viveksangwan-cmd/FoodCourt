import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  constructor(private recipeService: RecipeService){}
  selectedRecipe: Recipe;

  ngOnInit(): void {
    this.recipeService.selectedRecipeEmitter.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }
}
