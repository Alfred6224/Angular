import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { WorkComponent } from "./work/work.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, WorkComponent, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube';
}
