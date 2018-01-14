import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("array", [
      transition("*=>*", [
        query(":enter", style({ opacity: 70 }), { optional: true }),
        query(
          ":enter",
          stagger("300ms", [
            animate(
              ".6s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-75%", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px",
                  offset: 0.3
                }),
                style({ opacity: 1, transform: "translateY(0", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        ),
        query(":leave", style({ opacity: 0 }), { optional: true }),
        query(
          ":leave",
          stagger("300ms", [
            animate(
              ".6s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(0", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px",
                  offset: 0.3
                }),
                style({ opacity: 1, transform: "translateY(-75%", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  items = "";
  array = ["Biryani", "Butter Chicken", "Handi"];
  length: number;
  constructor() {}

  ngOnInit() {}

  addItem() {
    const list = this.array.push(this.items);
    this.length = this.array.length;
  }

  removeItem(i) {
    this.array.splice(i, 1);
  }
}
