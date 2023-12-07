import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

export class ShopplingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private  ingredients: Ingredient[] = [
        new Ingredient('Apple',5)
    ];


    getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    addAllIngredients(ingredients: Ingredient[]): void{
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);
        });
        this.ingredientsChanged.emit(this.ingredients);
    }
}