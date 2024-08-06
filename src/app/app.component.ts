// Angular cdk is installed using 'npm install --save @angular/cdk@16.2.12' command
import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait)
                this.pcMode = false;

              if (breakpoint === Breakpoints.WebLandscape) this.pcMode = true;
            }
        },
      });
  }
}
