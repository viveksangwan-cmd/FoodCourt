import { Component,Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { ShopplingListService } from 'src/app/shared/services/shopping-list.service';
import {ActivatedRoute} from '@angular/router'
import { RecipeService } from 'src/app/shared/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe : Recipe;
  id: number = -1;
  constructor(private recipeService : RecipeService, private activedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }
  addAllIngredientsToShoppingList(): void{
    this.recipeService.allAllIngredientsToShoppingList(this.recipe.ingredients);
  }
}
