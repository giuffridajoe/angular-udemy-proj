import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a test recipe',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),

        new Recipe(
            'Another Test Recipe',
            'This is a test recipe2',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Bread', 1),
                new Ingredient('Meat', 2)
            ])
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}