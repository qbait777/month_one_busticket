import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './Components/roles/roles.component';
import { MasterComponent } from './Components/master/master.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Bus_Ticket';
}
