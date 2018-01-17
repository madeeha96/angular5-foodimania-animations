import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.sass"]
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.params.subscribe(res => {
      console.log(res.id);
    });
  }

  ngOnInit() {}

  sendmetoHome() {
    this.route.navigate([""]);
  }
}
