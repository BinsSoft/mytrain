import { Component } from '@angular/core';
import {MatSidenavModule, MatDividerModule, MatListModule} from '@angular/material'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loader: boolean = false;  
  randomName(start: any) {
        start.toggle();
    }
}
