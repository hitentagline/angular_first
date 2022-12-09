import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /** Register Form by Template */
  Register(regForm:any){
    let firstName = regForm.form.controls.firstName.value;
    let lastName = regForm.form.controls.lastName.value;
    let email = regForm.form.controls.email.value;
    let contact = regForm.form.controls.contact.value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(contact);
  }

}
