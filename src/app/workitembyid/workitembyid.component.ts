import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workitembyid',
  templateUrl: './workitembyid.component.html',
  styleUrls: ['./workitembyid.component.css']
})
export class WorkitembyidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  WorkItemById = new FormGroup({
    id: new FormControl("", Validators.required),
  });
  workItembyid() { }
  get id(): FormControl {
    return this.WorkItemById.get('id') as FormControl;
  }

}
