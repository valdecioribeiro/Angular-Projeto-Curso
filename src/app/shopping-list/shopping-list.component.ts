import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredientes: Ingredient [] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  ngOnInit(){

  }

}
