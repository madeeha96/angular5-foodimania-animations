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
import { DataService } from "../data.service";

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
  array = [];
  length: number;
  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.lists.subscribe(res => this.array = res);
    this._data.changeList(this.array);
  }

  addItem() {
    const list = this.array.push(this.items);
    this.length = this.array.length;
    this._data.changeList(this.array);
  }

  removeItem(i) {
    this.array.splice(i, 1);
    this._data.changeList(this.array);
  }
}
