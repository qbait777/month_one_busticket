import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MasterComponent } from './Components/master/master.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bus_Ticket';
}
