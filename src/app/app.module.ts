import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfDirectivesComponent } from './ng-if-directives/ng-if-directives.component';
import { NgForDirectivesComponent } from './ng-for-directives/ng-for-directives.component';
import { NgSwitchDirectivesComponent } from './ng-switch-directives/ng-switch-directives.component'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NgIfDirectivesComponent,
    NgForDirectivesComponent,
    NgSwitchDirectivesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
