import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Tacos',
      'Meat, Tortilla, Cheese',
      'https://cdn.5280.com/2016/04/sb_tacos-jalisco_img_9689_1-960x680.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
