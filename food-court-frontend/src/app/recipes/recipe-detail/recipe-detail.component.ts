import { Component,Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { ShopplingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe : Recipe;
  constructor(private shoppingListService: ShopplingListService){}
  addAllIngredientsToShoppingList(): void{
    this.shoppingListService.addAllIngredients(this.recipe.ingredients);
  }
}
