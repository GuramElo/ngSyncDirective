import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSyncDirective } from 'src/directives/ng-sync.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSyncDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
