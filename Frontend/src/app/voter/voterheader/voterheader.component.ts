import { Component } from '@angular/core';
import { VoterService } from '../../voter.service';

@Component({
  selector: 'app-voterheader',
  templateUrl: './voterheader.component.html',
  styleUrl: './voterheader.component.css'
})
export class VoterheaderComponent {
  constructor(
    private voter: VoterService
  ) {}

  routeToLink(link: string): void {
    this.voter.navigateToLink(link);
  }
}
