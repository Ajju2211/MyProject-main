import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  constructor(private http: HttpClient) { }
  baseurl = "https://dev.azure.com/2201556TestData";
  private options = {
    headers:{
      'Authorization': "Basic OjQ1c3kzaDZlNGd3Nm94cmZzb296amt4ZHNpbGRuc292d3hpaGt1c2JjZW91eHF1Z2d2cnE="
    }
  }

  // WorkitemSearch(query: String) {
  //   return this.http.get<any>(this.baseurl + 'ADO/' + query)
  // }
  getAllProjects() {
    return this.http.get<any>(`${this.baseurl}/_apis/projects?api-version=6.1`, this.options);
  }
}
