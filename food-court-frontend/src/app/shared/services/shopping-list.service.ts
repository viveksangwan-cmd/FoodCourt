import {Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";
import { RecipeService } from "./recipe.service";
@Injectable()
export class ShopplingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    onEditIngredientClicked = new Subject<number>();

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

    updateIngredientById(ingredient: Ingredient,id: number): void{
        this.ingredients[id] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredientById(id: number): void{
        this.ingredients.splice(id,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    } 

    getIngredientById(id: number): Ingredient{
        return this.ingredients.slice(id,id+1)[0];
    }
}