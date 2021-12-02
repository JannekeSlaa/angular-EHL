import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleLoopComponent } from './simple-loop/simple-loop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VrijdagComponent } from './vrijdag/vrijdag.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    SimpleLoopComponent,
    NavbarComponent,
    VrijdagComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
