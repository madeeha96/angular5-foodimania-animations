import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private list = new BehaviorSubject<any>([
    "Biryani",
    "Butter Chicken",
    "Handi"
  ]);
  lists = this.list.asObservable();

  constructor() {}

  changeList(list) {
    this.list.next(list);
  }
}
