import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/Interface/role';
import { Client } from '../../model/Interface/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientSrv = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientSrv.getALLEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }
  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }
}
