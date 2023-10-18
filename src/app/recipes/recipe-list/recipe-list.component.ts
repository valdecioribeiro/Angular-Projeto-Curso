import { Component, OnInit } from '@angular/core';
import { Receita } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  receitas: Receita[] = [
    new Receita(
      "A teste recipe", 
      "Isso é um teste", 
      "https://ciadereceitas.com.br/wp-content/uploads/2022/09/receita-de-bem-casado.png")
  ];

  constructor() {

  }
  
  ngOnInit(): void {
    
  }

}
