import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-locdashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './locdashboard.component.html',
  styleUrl: './locdashboard.component.css'
})
export class LocdashboardComponent {
  public user: { name: string; email: string; profilePic:string } | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem("current_user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      alert("No user logged in. Redirecting to login page.");
      this.router.navigate(["login"]);
    }
  }
  

  changeProfilePic(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.user) {
          this.user.profilePic = reader.result as string;
          localStorage.setItem("current_user", JSON.stringify(this.user));
          
          let users = JSON.parse(localStorage.getItem("info-user") ?? "[]");
          let updatedUsers = users.map((u: any) =>
            u.email === this.user?.email ? { ...u, profilePic: this.user?.profilePic } : u
          );
          localStorage.setItem("info-user", JSON.stringify(updatedUsers));
        }
      };
      reader.readAsDataURL(file);
    }
  }

  logout() {
    localStorage.removeItem("current_user");
    alert("Logged out successfully.");
    this.router.navigate(["login"]);
  }
}
