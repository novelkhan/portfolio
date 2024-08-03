import { Component } from '@angular/core';

//  Angular 16 project is created using 'npx -p @angular/cli@16 ng new portfolio' command. Guide Link- https://www.youtube.com/watch?v=LYNG3kcKRQ8 



//  Redirect problem solution is in this Link- https://www.youtube.com/watch?v=ZUEfQgPwDXI 
//  _redirects File is added in src folder. And Its path is added in angular.json file 



//  BootStrap-5 Installation Guide Link- https://www.youtube.com/watch?v=TIGy3VYsG5g  
//  1. npm i bootstrap command is run to install bootstrap
//  2. npm i @popperjs/core command is run to install bootstrap
//  3. npm i bootstrap-icons command is run to install bootstrap 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
