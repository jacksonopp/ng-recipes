import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("bacon", 5),
    new Ingredient("more bacon", 5)
  ];

  constructor() {}

  ngOnInit(): void {}
}
