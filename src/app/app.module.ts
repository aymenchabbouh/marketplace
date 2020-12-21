import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { PanelComponent } from './home/panel/panel.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ProblemfoundComponent } from './problemfound/problemfound.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { IndexComponent } from './home/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    PanelComponent,
    ProductDetailsComponent,
    ProblemfoundComponent,
    NotfoundComponent,
    routingComponent,
    NavbarComponent,
    FooterComponent,
    FiltersComponent,
    IndexComponent,
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
