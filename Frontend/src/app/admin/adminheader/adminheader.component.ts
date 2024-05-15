import { Component } from '@angular/core';
import { VoterService } from '../../voter.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  constructor(
    private voter: VoterService
  ) {}

  routeToLink(link: string): void {
    this.voter.navigateToLink(link);
  }
}
