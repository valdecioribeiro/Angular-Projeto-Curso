import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe(
      "A teste recipe", 
      "Isso é um teste", 
      "https://ciadereceitas.com.br/wp-content/uploads/2022/09/receita-de-bem-casado.png")
  ];

  constructor() {

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
