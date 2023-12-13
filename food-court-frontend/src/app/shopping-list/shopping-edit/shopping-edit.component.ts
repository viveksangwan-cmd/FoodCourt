import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShopplingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('form',{static: false}) slForm: NgForm;
  onEdit: boolean;
  editIndex: number;
  constructor(private shoppingListService: ShopplingListService){}
  
  ngOnInit(): void {
    this.onEdit = false;
    this.editIndex = -1;
    this.shoppingListService.onEditIngredientClicked.subscribe((id: number)=>{
      this.onEdit = true;
      this.editIndex = id;
      const editItem = this.shoppingListService.getIngredientById(id);
      this.slForm.setValue({
        name: editItem.name,
        amount: editItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.shoppingListService.onEditIngredientClicked.unsubscribe();
  }

  clear(): void{
    this.onEdit = false;
    this.slForm.reset();
  }

  deleteByIndex(): void{
    this.clear();
    this.shoppingListService.deleteIngredientById(this.editIndex);
  }

  formSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.onEdit){
      this.onEdit = false;
      this.shoppingListService.updateIngredientById(newIngredient,this.editIndex);
      this.slForm.reset();
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
  }
}
