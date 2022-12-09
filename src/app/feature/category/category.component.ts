import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { AllserviceService } from 'src/app/allservice.service';
import { Category, User } from 'src/app/shared/interface/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  
})
export class CategoryComponent implements OnInit {

  @Input() job:string = "";

  @ViewChild('nickName') nickName = ElementRef;

  @ViewChild('myname') myname = ElementRef;

  @ViewChild('fullname') fullname = ElementRef;

  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

 
  cats:Category[]=[
    {
      category_id:1,
      category_name:"Computer"
    },
    {
      category_id:2,
      category_name:"IT"
    },
    {
      category_id:3,
      category_name:"EC"
    }
  ]
  @Output() display: EventEmitter<Category> = new EventEmitter<Category>();

  id: string='';
  displayname:boolean= false;
  name!:string;
  readonly createdDate = new Date();
  roles = ["user"];
  myInput:string = "";
  isBlue:boolean = true;

  numbers = 5;

  nick:string = "";

  catForm!:FormGroup;

  todaysdate:any;
  users: User[] = [];
  totalAngularPackages:any;
  constructor(private allservice: AllserviceService, private router:Router, private http: HttpClient) { }

  categories:Category[] = [
    {
      category_id:1,
      category_name:"Staging"
    },
    {
      category_id:2,
      category_name:"Production"
    }
  ];

  title = 'By Hiten';
  posts : any;

  ngOnInit(): void {
    console.log(this.cats);

    this.todaysdate = this.allservice.showTodaysDate();

    this.users = this.allservice.showUsersList();

    this.catForm = new FormGroup({

      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
     
    });


    this.allservice.getPosts().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });


   
  }

 

  /** Register Form by Template */
  Category(catForm:any){
    console.log(catForm)

    this.allservice.saveData(catForm).subscribe((result)=> {
      console.log(result);
    });
 
  }
  
  /** Detail Page Navigate */
  onSelect(category:Category) {
    this.router.navigate(["/category",category.category_id])
  }

  save(category:Category) {
    alert(category.category_name);
    this.display.emit(category);
  }

  /** Local Reference: Get Input value from same component template */
  checkinput(myLocalRef: HTMLInputElement) {
    alert(myLocalRef.value);
  }

  checkname(mynamecheck : HTMLInputElement) {
    alert(mynamecheck.value);
  }

  viewchild(nickName: HTMLInputElement){
    this.nick = nickName.value;
    alert(this.nick);
  }

  
  
}
