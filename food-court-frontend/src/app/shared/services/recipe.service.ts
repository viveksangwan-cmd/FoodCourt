import { EventEmitter } from "@angular/core";
import { Recipe } from "src/app/shared/models/recipe.model";
import { Ingredient } from "../models/ingredient.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
          'Chicken Biryani',
          'Rice with Chicken',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Rice',2),
          new Ingredient('Chicken',1),
          new Ingredient('Garam Masala',.5)
        ]),
        new Recipe(
        'Mutton Biryani',
        'Rice with mutton',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Rice',2),
          new Ingredient('Mutton',1),
          new Ingredient('Garam Masala',.5)
        ])
      ];

      getRecipes(): Recipe[]{
        return this.recipes;
      }

      selectedRecipeEmitter = new EventEmitter<Recipe>();    
}