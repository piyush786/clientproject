import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = false;
  
  constructor() {

  }

  formSubmit(e) {
    e.preventDefault(); 

  }

}
