import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';
import { AzureService } from '../services/azure.service';

@Component({
  selector: 'app-sprint-workitem',
  templateUrl: './sprint-workitem.component.html',
  styleUrls: ['./sprint-workitem.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SprintWorkitemComponent implements OnInit {

  constructor(private azureService: AzureService) { }

  ngOnInit(): void {
  }
  public search: any = [];
  public myJson: any = JSON;
  public log: Function = console.log;
  toggleInput(event: any) {
    if (event.target.value == 'false') {
      event.target.value = 'true';
    } else {
      event.target.value = 'false';
    }
  }
  Search = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    claimid: new FormControl('')
  })
  SearchSubmitted() {
    console.log("formdata", this.Search.value)
    let query = '';
    if (this.Search.value.id) {
      query = 'GetWorkItemsDataby/' + this.Search.value.id
    }
    // this.azureService.WorkitemSearch(query).subscribe((res: any) => {
    //   console.log('submitted', res);
    //   if (Array.isArray(res)) {
    //     this.search = res;
    //   } else {
    //     this.search = [res];
    //   }

    //   // }
    // })
  }
  get ID(): FormControl {
    return this.Search.get('id') as FormControl;
  }

}
