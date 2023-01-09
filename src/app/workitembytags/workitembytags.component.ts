import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workitembytags',
  templateUrl: './workitembytags.component.html',
  styleUrls: ['./workitembytags.component.css']
})
export class WorkitembytagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Tags = new FormGroup({
    Tagname: new FormControl("", Validators.required),
  });
  tags() { }
  get Tagname(): FormControl {
    return this.Tags.get('Tagname') as FormControl;
  }

}
