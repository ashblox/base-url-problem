import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'base-url-problem';

  constructor(
    private _router: Router
  ) { }

  goToFrance(): void {
    this._router.navigate(["/france"])
  }

  goToGermany(): void {
    this._router.navigate(["/germany"])
  }
}
