
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { CustomerComponent } from './routes/customer/customer.component';
import { SalesmanComponent } from './routes/salesman/salesman.component';
import { SideMenuComponent } from './content/side-menu/side-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { IndexComponent } from './routes/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    InputBoxComponent,
    CustomerComponent,
    SalesmanComponent,
    SideMenuComponent,
    MainMenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
