import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule(
    {
      declarations: [AppComponent, NavComponent, HomeComponent, SearchComponent],
      imports:[BrowserModule, AppRoutingModule,FormsModule],
      providers: [],
      bootstrap: [AppComponent],
    }
)
export class AppModule{
 
}