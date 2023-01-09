import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AzureService } from '../services/azure.service';
// import { AzureService } from '../services/azure.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public projects : any;
  public loading: Boolean=true;

  constructor(private azureService: AzureService) { }


  ngOnInit(): void {
    this.azureService.getAllProjects().pipe().subscribe(data => {
      this.loading = false;
      console.log(data);
      this.projects = data.value;
  });
  }

}
