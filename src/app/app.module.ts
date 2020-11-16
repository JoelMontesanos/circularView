import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClouthesFormComponent } from './components/clouthes-form/clouthes-form.component';
import { ClouthesListComponent } from './components/clouthes-list/clouthes-list.component';

import {ClouthesService} from './services/clouthes.service';
import { ConsComponent } from './cons/cons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClouthesFormComponent,
    ClouthesListComponent,
    ConsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClouthesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
