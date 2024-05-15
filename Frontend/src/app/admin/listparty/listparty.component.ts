import { Component } from '@angular/core';
import { VoterService } from '../../voter.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-listparty',
  templateUrl: './listparty.component.html',
  styleUrl: './listparty.component.css'
})
export class ListpartyComponent {
  allParty: any[] = [];
  constructor(
    private service: VoterService,
    private router: Router
  ) {
    this.getAllParty();
  }
  getAllParty(): void {
    this.service.getAllParty().pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        console.log('>>>>##>>', res);
        this.allParty = res;
      }
    });
  }
  onDelete(party: any) : void {
    this.service.deletePartyById(party?.partyId).subscribe((res: any) => {
      if (res && res === 'Party deleted successfully') {
        alert("Party Deleted successfully");
        this.getAllParty();
      }
    })
  }
  onEdit(party: any) : void {
    this.router.navigate(['/addparty'],{ queryParams: { partyId: party?.partyId}});
  }
}


