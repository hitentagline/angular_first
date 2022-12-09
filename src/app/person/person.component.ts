import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persons } from '../shared/interface/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  firstName = "Hiten";
  singleValue!:number;
  amount!:number;
  newPrice!:number;
  newAmount!:number;
  final!:number;

  city = ['surat','ahmedabad','baroda'];

  submitted = false;

  calcForm!:FormGroup;


  constructor() {
    
   }

  ngOnInit(): void {
    this.calcForm = new FormGroup({
      singleValue: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      newPrice: new FormControl('',Validators.required),
      newAmount: new FormControl('',Validators.required),
    });
  }
  // getCalc() {
  //   let singleValue:number = this.singleValue;
  //   let amount:number = this.amount;
  //   let newPrice:number = this.newPrice;
  //   let newAmount:number = this.newAmount;

  //   let firststock =  amount / singleValue;
  //   let newstk =  newAmount / newPrice;

  //   let totalAmount = +amount + +newAmount;
  //   let totalstk = +firststock + +newstk;

  //   let finalValue = totalAmount / totalstk;

  //   this.final = finalValue; 

  //   console.log(finalValue);
  //   console.log(totalstk);
    
  // }

  submitForm(){

    let singleValue:number = this.calcForm.value.singleValue;
    let amount:number = this.calcForm.value.amount;
    let newPrice:number = this.calcForm.value.newPrice;
    let newAmount:number = this.calcForm.value.newAmount;

    let firststock =  amount / singleValue;
    let newstk =  newAmount / newPrice;

    let totalAmount = +amount + +newAmount;
    let totalstk = +firststock + +newstk;

    let finalValue = totalAmount / totalstk;

    this.final = finalValue; 

    console.log(finalValue);
    console.log(totalstk);

  }

  resetForm() {
    this.calcForm.reset();
  }


  

  
  

}
