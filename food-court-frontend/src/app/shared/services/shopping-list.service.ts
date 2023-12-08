import {Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";
@Injectable()
export class ShopplingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private  ingredients: Ingredient[] = [
        new Ingredient('Apple',5)
    ];


    getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addAllIngredients(ingredients: Ingredient[]): void{
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);
        });
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}