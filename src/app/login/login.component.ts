import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router: Router) {}

  public storage = JSON.parse(localStorage.getItem("info-user") ?? "[]"); // Safe handling
  public email: string = "";
  public password: string = "";

  login() {
    let oneUser = this.storage.find((el: { name: string; email: string; password: string }) => el.email === this.email);

    if (!oneUser) {
      alert("User does not exist");
      return;
    }

    if (oneUser.password !== this.password) {
      alert("Incorrect password");
      return;
    }

    localStorage.setItem("current_user", JSON.stringify(oneUser));
    alert("Login Successful");
    this.router.navigate(["locdashboard"]);
  }
}
