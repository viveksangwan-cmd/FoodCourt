import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShopplingListService } from '../shared/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = [];
  shoppingListUpdateSub: Subscription;
  constructor(private shoppingListService: ShopplingListService){}

  ngOnInit(): void {
    this.ingredients =  this.shoppingListService.getIngredients();
    this.shoppingListUpdateSub =  this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[])=> this.ingredients=ingredients);
  }

  ngOnDestroy(): void {
    this.shoppingListUpdateSub.unsubscribe();
  }
}
