import { LogoutComponent } from './logout/logout.component';
 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { LoginComponent } from './login/login.component';
import { MartComponent } from './mart/mart.component';
 import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MartComponent,
     CartComponent,
     LogoutComponent,
     
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
      