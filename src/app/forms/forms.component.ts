import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  public myName: string = '';
  public email: string = '';
  public password: string = '';
  public cPassword: string = '';
  public editingIndex: number | null = null;
  public userInfo: {
    name: string;
    email: string;
    password: string;
    cPassword: string;
  }[] = [];
  public storage = JSON.parse(localStorage.getItem("info-user")!) || [] //unNull

  ngOnInit() {
    console.log(this.storage);
  }

  addUser() {
    console.log(this.myName, this.email, this.password, this.cPassword);
    let data = {
      name: this.myName,
      email: this.email,
      password: this.password,
      cPassword: this.cPassword,
    };
    this.userInfo.push(data);
    this.storage.push(data)
    localStorage.setItem("info-user", JSON.stringify(this.storage))
    console.log(this.userInfo);
    this.myName = '';  // Clear input fields
    this.email = '';
    this.password = '';
    this.cPassword = '';
  }
  deleteUser(index: number){
    this.userInfo.splice(index, 1);
  }
  editUser(index: number) {
    let user = this.userInfo[index]
    this.myName = user.name
    this.email = user.email
    this.password = user.password
    this.cPassword = user.cPassword

    
    this.userInfo.splice(index, 1);



  }

}
