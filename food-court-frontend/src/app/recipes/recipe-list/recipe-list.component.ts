import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani','Rice with Chicken','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
}
