import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './feature/category-details/category-details/category-details.component';
import { CategoryComponent } from './feature/category/category.component';
import { ProductComponent } from './feature/product/product.component';
import { RegisterComponent } from './feature/register/register.component';
import { PersonComponent } from './person/person.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: "category", component:CategoryComponent, canActivate: [AuthGuard] },
  { path: "category/:id",  component:CategoryDetailsComponent},
  { path: "product", component:ProductComponent },
  { path: "person", component:PersonComponent },
  { path: "product/:id", component:ProductDetailsComponent },
  { path: "register", component:RegisterComponent },

  
  { path: "**", redirectTo:'category'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CategoryComponent, ProductComponent]
