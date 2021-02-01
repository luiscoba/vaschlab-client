import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: '**', redirectTo: 'product', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
