import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public myName: string = '';
  public email: string = '';
  public password: string = '';
  public cPassword: string = '';
  public profilePic: string = '';
  public storage = JSON.parse(localStorage.getItem("info-user")!) || [] //unNull

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePic = reader.result as string; 
      };
      reader.readAsDataURL(file);
    }
  }

  addUser() {
    if (this.myName == "") {
      alert("Username cannot be empty")
      return;
    }
    if(this.password !== this.cPassword) {
      alert("password does not match")
      return;
    }
    if(this.password.length < 8) {
      alert("password must not be lesser than 8 characters")
      return;
    }    
    console.log(this.myName, this.email, this.password, this.cPassword);

    let data = {
      name: this.myName,
      email: this.email,
      password: this.password,
      cPassword: this.cPassword,
      profilePic: this.profilePic
    }
    this.storage.push(data)
    localStorage.setItem("info-user", JSON.stringify(this.storage));
    console.log(this.storage);
    this.router.navigate(["login"])
  }
  
}
