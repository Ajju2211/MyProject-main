import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workitembydate',
  templateUrl: './workitembydate.component.html',
  styleUrls: ['./workitembydate.component.css']
})
export class WorkitembydateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  WorkItemByDate = new FormGroup({
    startdate: new FormControl("", Validators.required),
    enddate: new FormControl("", Validators.required),

  });
  workItembydate() { }
  get startdate(): FormControl {
    return this.WorkItemByDate.get('startdate') as FormControl;
  }
  get enddate(): FormControl {
    return this.WorkItemByDate.get('enddate') as FormControl;
  }

}
