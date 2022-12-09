import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details/category-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    CategoryComponent,
    CategoryDetailsComponent

  ]
})
export class FeatureModule { }
