import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    Username: String | undefined;
    Password: String| undefined;
  
  
    logincomp(){
      console.log('Username', this.Username);
      console.log('Password', this.Password);
      alert("Login successful");
    }
  

}
