import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { VoterService } from './voter.service';
import { debounce, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularvoting';
  isVoterLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private service:VoterService
    ) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart),
      ).subscribe((event: any) => {
        if (typeof localStorage !== 'undefined') {
          const role =  localStorage.getItem("role");
          if (role !== null && role === 'voter') {
            setTimeout(() => {
              this.isVoterLoggedIn = true;
              this.isAdminLoggedIn = false;
            }, 100);
          } else {
            if (role !== null && role === 'admin') {
              setTimeout(() => {
                this.isAdminLoggedIn = true;
                this.isVoterLoggedIn = false;
              }, 100);
            } {
              setTimeout(() => {
                this.isVoterLoggedIn = false;
                this.isAdminLoggedIn = false;
              }, 1);
            }
          }
        }
  
      });
      this.service.getvotingEndDate();
    }
}
