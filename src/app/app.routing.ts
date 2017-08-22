import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { CustomerComponent } from './routes/customer/customer.component';

const routes:Routes = [
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    },
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: 'customer', component: CustomerComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
]
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }

