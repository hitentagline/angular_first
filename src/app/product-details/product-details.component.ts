import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Output() childmessage = new EventEmitter();
  constructor() { }



  ngOnInit(): void {
  }
  @Output() newbox = new EventEmitter();


  send(){
    let msg = "Update Child Msg";

    this.childmessage.emit(msg);
  }

}
