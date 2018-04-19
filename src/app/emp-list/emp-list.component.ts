import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empList: any = [];
  //heroForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.heroForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')])
    // });
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.http.get(environment.listapi)
      .subscribe(
        res => {
          this.empList = res['data'];
        },
        err => {
          alert("error")
        }
      );
  }



//dynamic forms
//   dataObject = {
//     name: {
//             label: 'Name',
//             value: 'Juri',
//             type: 'text',
//             validation: {
//               required: true,
//               pattern:'[a-zA-Z]*'
//             }
//     },
//     age: {
//         label: 'Age',
//         value: 32,
//         type: 'text',
//         validation: {
//           required: true,
//           pattern:'[0-9]*'
//         }
//     }
// };


// form: FormGroup;
// objectProps;

//  ngOnInit() {
//     this.objectProps = 
//     Object.keys(this.dataObject)
//         .map(prop => {
//             return Object.assign({}, { key: prop} , this.dataObject[prop]);
//         });

//     const formGroup = {};
//     for(let prop of Object.keys(this.dataObject)) {
//         formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
//     }

//     this.form = new FormGroup(formGroup);
// }

// private mapValidators(validators) {
//   const formValidators = [];

//   if(validators) {
//     for(const validation of Object.keys(validators)) {
//       if(validation === 'required') {
//         formValidators.push(Validators.required);
//       } else if(validation === 'min') {
//         formValidators.push(Validators.min(validators[validation]));
//       } else if(validation === 'pattern') {
//         formValidators.push(Validators.pattern(validators['pattern']));
//       }
//     }
//   }

//   return formValidators;
// }

}
