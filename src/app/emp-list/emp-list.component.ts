import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empList:any=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.http.get(environment.listapi)
    .subscribe(
      res => {
        this.empList=res['data'];
      },
      err => {
        alert("error")
      }
    );
  }

}
