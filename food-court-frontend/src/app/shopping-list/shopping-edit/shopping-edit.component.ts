import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShopplingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('amountInput') amountRef: ElementRef;
  @ViewChild('nameInput') nameRef: ElementRef;

  constructor(private shoppingListService: ShopplingListService){}
  addIngredient(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value));
  }
}
