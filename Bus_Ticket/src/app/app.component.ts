import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './Components/roles/roles.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RolesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bus_Ticket';
}
