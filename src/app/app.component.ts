import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridsterDraggable } from 'angular-gridster2/dist/gridsterDraggable.service';
import { gridSterOptions } from './Defaults/gridsterOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {

  }
}
