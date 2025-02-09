import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/Interface/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/Interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    AlertComponent,
    MyButtonComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  currentDate: Date = new Date();
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  userList$: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClien(data: string) {
    debugger;
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Cleint Created Success');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.massage);
        }
      });
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert('Cleint Delete Success');
            this.loadClient();
            this.clientObj = new Client();
          } else {
            alert(res.massage);
          }
        });
    }
  }
}
