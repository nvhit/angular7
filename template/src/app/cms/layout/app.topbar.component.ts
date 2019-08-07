import { Component } from '@angular/core';
import {LayoutComponent} from "./layout.component";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: LayoutComponent) {}
}
