import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/Interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole [] = []
  http = inject(HttpClient);

// constructor(private http: HttpClient){

// }

ngOnInit(): void {
  this.getAllRoles()
}


getAllRoles(){
  this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
    this.roleList = res.data;

  })
}
























  //string. number, boolean, date, object. array, null ,undefined
// firstName: string = 'Angular Tutorial';
// angularVersion = 'Version 19';

// version: number = 18;
// isActive : boolean = false;
// currentDate : Date = new Date();
// inputType: string = "button";
// selectedState: string = '';

// showWelcomeAlert () {
//   alert("Welcome to Angular 18 Tutorial")
// }

// showMessage(massage:string) {
//   alert(massage)
// }

}
