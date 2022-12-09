import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/common';
import { Router } from '@angular/router';

import { FormGroup , FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm!:FormGroup;
  productTitle:string="";

  childText = "";

  product:Product[] = [
    {
      product_id:1,
      product_name:"Apple",
      price:1500,
    },{
      product_id:2,
      product_name:"Bluebarry",
      price:1500,
    },{
      product_id:3,
      product_name:"Samsung",
      price:1500,
    },{
      product_id:4,
      product_name:"Nokia",
      price:1500,
    }
  ];

  constructor(private router:Router, private formbuilder:FormBuilder) {
   
   }

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      productTitle: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
    });
  }

  saveProduct(productForm:any) {
    let productTitle = productForm.controls.productTitle.value;
    let description = productForm.controls.description.value;
    let price = productForm.controls.price.value;

    console.log(productTitle);
    console.log(description);
    console.log(price);
  }

  submitForm() {
    let productTitle = this.productForm.get('productTitle')?.value;
    let description = this.productForm.get('description')?.value;
    // let price = this.productForm.get('price')?.value;
    let price = this.productForm.value.price;

    console.log(productTitle);
    console.log(description);
    console.log(price);
  }

  resetForm() {
    this.productForm.reset({
      productTitle: "Default product",
      description: "Default Description",
      price: 1000,
    });
  }

  openProduct(product: Product) {
    alert(product.product_id);
    this.router.navigate(["/product", product.product_id]);
  }
  getMessage= ($event:any) => {
    this.childText = $event;
  }

}
