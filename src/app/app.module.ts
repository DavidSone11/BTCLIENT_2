import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './shared/components/user/user.component';

import { UserDirectiveDirective } from './shared/directive/user-directive.directive';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    
    UserDirectiveDirective,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
