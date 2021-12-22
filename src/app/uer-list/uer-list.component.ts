import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uer-list',
  templateUrl: './uer-list.component.html',
  styleUrls: ['./uer-list.component.css']
})
export class UerListComponent implements OnInit {
  apiData:any=[];

  url:any="https://reqres.in/api/users?page=1";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data:any)=> {

      this.apiData.push(data.data);
      console.log(this.apiData);
    })
  }

}
