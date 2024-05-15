import { Component } from '@angular/core';
import { VoterService } from '../../voter.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-voteresult',
  templateUrl: './voteresult.component.html',
  styleUrl: './voteresult.component.css'
})
export class VoteresultComponent {
  allParty: any[] = [];
  constructor(
    private service: VoterService
  ) {
    this.service.getAllParty().pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        
        console.log('>>>>##>>', res);
        this.allParty = res;
      }
    });
  }
}

