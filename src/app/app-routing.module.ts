import { LogoutComponent } from './logout/logout.component';
import { MartComponent } from './mart/mart.component';
 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
 import { CartComponent } from './cart/cart.component';
  

const routes: Routes = [
  // {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'' ,component: LoginComponent},
   {path:'login' ,component: LoginComponent},
   { path: 'logout', component: LogoutComponent },
  {path:'mart' ,component: MartComponent},  
  {path:'cart' ,component: CartComponent}, 

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule {}
// export const routingcompoents=[LoginComponent,MartComponent]
