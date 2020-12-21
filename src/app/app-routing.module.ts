import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {ProductDetailsComponent} from './home/product-details/product-details.component';
import {PanelComponent} from './home/panel/panel.component';
import {ProductComponent} from './home/product/product.component';
import {IndexComponent} from './home/index/index.component';


const routes: Routes = [
    { path: 'notfound', component: NotfoundComponent},
  {
    path: '', component: IndexComponent, children: [
      { path: 'home', component: HomeComponent},
      { path: 'product/:product_id', component: ProductDetailsComponent},
      { path: 'panel/:panel_id', component: PanelComponent},
    ]
  },
  { path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  NotfoundComponent,
  IndexComponent,

]
