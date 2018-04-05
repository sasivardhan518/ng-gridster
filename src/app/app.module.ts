import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';


import { AppComponent } from './app.component';
import { GridsterComponent } from './gridster/gridster.component';


@NgModule({
  declarations: [
    AppComponent,
    GridsterComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
