import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workitemby-sprint',
  templateUrl: './workitemby-sprint.component.html',
  styleUrls: ['./workitemby-sprint.component.css']
})
export class WorkitembySprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Sprint = new FormGroup({
    id: new FormControl("", Validators.required),
  });
  sprint() { }
  get id(): FormControl {
    return this.Sprint.get('id') as FormControl;
  }
}
