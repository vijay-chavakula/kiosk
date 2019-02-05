import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatDividerModule, MatIconModule, MatGridListModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button'; 
import { DatePipe } from '@angular/common';
 @Component({
  selector: 'shelf-page',
  templateUrl: './shelf.component.html'
})
export class ShelfComponent implements OnInit, OnDestroy {
  todayDate : String ;
  dateTimerId;

  constructor() { 
    this.todayDate = new DatePipe("en-US").transform(new Date(), 'dd MMM yyyy h:mm aa','+0800');
  }

  ngOnInit() {
    this.dateTimerId = setInterval(() => {
      this.todayDate = new DatePipe("en-US").transform(new Date(), 'dd MMM yyyy h:mm aa','+0800');
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.dateTimerId);
  }

}
