import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoshootListComponent } from './components/photoshoot-list/photoshoot-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreatePhotoshootComponent } from './components/create-photoshoot/create-photoshoot.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoshootListComponent,
    NavigationComponent,
    CreatePhotoshootComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
