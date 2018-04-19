import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  empDetails = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getEmpoyeeDetails(id);
  }

  getEmpoyeeDetails(iId) {
    console.log("View details of employee ", iId);
    this.http.get(environment.viewapi+"?empid="+iId)
      .subscribe(
        res => {
          this.empDetails = res;
        },
        err => {
          alert("error")
        }
      );
  }
}
