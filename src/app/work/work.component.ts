import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  public isLogin: boolean = true;

  public students: Array<string> = ['Daniel', 'Samuel', 'Victor', 'Gbenga'];
  public users: string[] = ['User1', 'User2', 'User3', 'User3'];
  // public arrObj: object[] = [
  //   {
  //     name: 'Alf',
  //     gender: 'Male',
  //     qualified: true
  //   },
  //   {
  //     name: 'Tos',
  //     gender: 'Female',
  //     qualified: false
  //   },
  //   {
  //     name: 'Eni',
  //     gender: 'Male',
  //     qualified: false
  //   },
  //   {
  //     name: 'Ayo',
  //     gender: 'Female',
  //     qualified: true
  //   }
  // ];
  public arrObj = [
    { name: 'Alf', gender: 'Male', qualified: true },
    { name: 'Tos', gender: 'Female', qualified: false },
    { name: 'Eni', gender: 'Male', qualified: false },
    { name: 'Ayo', gender: 'Female', qualified: true }
  ];
  public date = new Date();
  public day = this.date.getDay();

  toggleForm() {
    // alert("Is working ")
    if (this.isLogin == true) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
    // this.isLogin = !this.isLogin
  }
}
