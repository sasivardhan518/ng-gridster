import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { gridSterOptions } from '../Defaults/gridsterOptions';

@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.css']
})
export class GridsterComponent implements OnInit {
  title = 'app';
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  itemChange(item, itemComponent) {
    //console.info('itemChanged', item, itemComponent);
  }

  itemResize(item, itemComponent) {
    //console.info('itemResized', item, itemComponent);
  }
  ngOnInit() {

    this.options = gridSterOptions;
    this.options.itemResizeCallback = (item, component) => {
      //console.info(item, component);
    };
    this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
    this.dashboard = [
      { cols: 2, rows: 6, y: 0, x: 0, title: 'one' },
      { cols: 2, rows: 2, y: 0, x: 2, title: 'two' },
      { cols: 3, rows: 4, y: 1, x: 5, title: 'three' }
    ];
  }

  getNextPossiblePosition() {
    const result = this.options.api.getNextPossiblePosition({});
    console.log(result);
    return result;
  }
  changedOptions() {
    this.options.api.optionsChanged();
  }
  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    // console.log(this);
    this.dashboard.push(item);
  }
  removeItem($event, item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    // if (this.getNextPossiblePosition())
    this.dashboard.push({});
    // else {
    //   alert("No Space to add :)");
    // }
  }
}
