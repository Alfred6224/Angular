import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Users{
  firstname: String, 
  lastname: String, 
  middlename: String, 

}

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})

export class FirstComponent {
  public name = 'Alfred';
  public age = 2037 - 1997;
  public job = 'Developer';
  public firstNum = 72;
  public secondNum = 40;
  public date = new Date()

  public name2: String = "Tosin";
  public right: Boolean = true
  public input: String = ''

  // Forms
  public firstname: String = ''
  public lastname: String = ''
  public middlename: String = ''
  public UserList:Users[] = []

  // AddUser(){
  //   const newUser:Users = {
  //     firstname:this.firstname,
  //     lastname:this.lastname,
  //     middlename:this.middlename
  //   }
  //   console.log(newUser);
  // }
  AddUser() {
    if (this.firstname && this.lastname && this.middlename) {
      const newUser: Users = {
        firstname: this.firstname,
        lastname: this.lastname,
        middlename: this.middlename
      }
      
      this.UserList.push(newUser);  // Add user to the list
      this.firstname = '';  // Clear input fields
      this.lastname = '';
      this.middlename = '';
    }
  }
  

}
