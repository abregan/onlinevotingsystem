import { Component } from '@angular/core';
import { take } from 'rxjs';
import { VoterService } from '../../voter.service';

@Component({
  selector: 'app-addvote',
  templateUrl: './addvote.component.html',
  styleUrl: './addvote.component.css'
})
export class AddvoteComponent {
  user: any = null;
  allParty: Array<any> = [];
  selectedParty = '';
  constructor(
    private service: VoterService
  ) {
    const currentDate = new Date().getTime();
    //console.log("currentDate", currentDate);
    // const electionDate = this.service.electionDate.getTime();
    const electionDate = this.service.electionDate.getTime();
   // console.log("Election Date", electionDate);
    if (currentDate > electionDate) {
      alert('Election is closed');
      this.service.navigateToLink('voterhome');
      return;
    }
    this.getUserInformation();
    this.service.getAllParty().pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        
        console.log('>>>>##>>', res);
        this.allParty = res;
      }
    });
  }

  getUserInformation() {
    const id = localStorage.getItem('uId');
    this.service.getUserById(id).pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        this.user = res;
        console.log('>>>>>>', this.user);
      }
    });
  }

  submit(): void {
    console.log('>>>>>>>>>>', this.selectedParty);
    if (this.selectedParty === '') {
      alert('Please select party for vote');
      return;
    }
    const id = localStorage.getItem('uId');
    this.service.addVote(this.selectedParty, id).pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>$$$', res);
      if (res && res?.vote === 'Vote Added') {
        alert('Vote added Successfully');
        this.getUserInformation();
      }
    });
  }

}
