import { Component, Input, OnInit } from '@angular/core';
import { Receita } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() receita: Receita;

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
