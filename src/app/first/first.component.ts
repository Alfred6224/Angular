import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  public name = 'Alfred';
  public age = 2037 - 1997;
  public job = 'Developer';
  public firstNum = 72;
  public secondNum = 40;
  public date = 2
}
