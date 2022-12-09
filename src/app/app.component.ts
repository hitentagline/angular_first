import { Component } from '@angular/core';
import { AllserviceService } from './allservice.service';
import { Category } from './shared/interface/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_first';
  myInput = "";

  categories: Category[] = [
    {
      category_id:1,
      category_name:"Mobiles",
    },
    {
      category_id:2,
      category_name:"laptops",
    },
  ]


  constructor() {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  datachanged(data:Category){
    console.log(data);
  }

}
