import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  public categoryId!:number;
   

  work:string = "";

  detailsForm!:FormGroup;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.params['id']);
    this.categoryId = id;
    this.work = "PHP developer";
  }

  goPrev() {
    let prev_id = this.categoryId - 1;
    this.router.navigate(['/category', prev_id]);
  }

  goNext() {
    let next_id = this.categoryId + 1;
    this.router.navigate(['/category', next_id]);
  }

  checkAlert(event: any) {
    alert(event);
  }

}
