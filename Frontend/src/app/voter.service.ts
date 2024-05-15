import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  public electionDate = new Date();
  private loginUrl = 'http://localhost:8080';
  private loggedInUser:any=null;
  constructor(private router:Router, private httpClient:HttpClient) { }
  navigateToLink(link: string): void {
    if (link === 'logout') {
      this.userLogout();
      return ;
    }
    this.router.navigate(['/'+ link]);
  }
  userLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  signInByCard(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/loginByCardNumber`, body).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response.user);
      })
    );
  }

  signInByEmail(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/loginByEmail`, body).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response.user);
      })
    );
  }
  storeLoggedInUser(user: any) {
    this.loggedInUser = user;
  }
  signUp(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/register`, body, { responseType: 'text' });
  }

getAllVoterList(): Observable<any>{
  return this.httpClient.get(`${this.loginUrl}/user/canditatelist`);
}
//Active Account
activateUser(userId: any): Observable<any>{
  return this.httpClient.post(`${this.loginUrl}/user/activateUser/${userId}`, {}, { responseType: 'text' });
}

deleteUser(userId: any): Observable<any>{
  return this.httpClient.delete(`${this.loginUrl}/user/deletecanditate/${userId}`, { responseType: 'text' });
}
updateUser(user: any):Observable<any> {
  return this.httpClient.put(`${this.loginUrl}/user/updateUser`, user);
  }

getUserById(id: any): Observable<any>{
  return this.httpClient.get(`${this.loginUrl}/user/getUserById/${id}`);
}

getAllParty(): Observable<any>{
  return this.httpClient.get(`${this.loginUrl}/party/partyList`);
}

addParty(body: any): Observable<any>{
  return this.httpClient.post(`${this.loginUrl}/party/addparty`, body, { responseType: 'text' });
 
 }
getPartyById(pId: any): Observable<any>{
  return this.httpClient.get(`${this.loginUrl}/party/findByPartyId/${pId}`);
}

updateParty(party: any):Observable<any> {
  return this.httpClient.put(`${this.loginUrl}/party/updateparty/${party?.partyId}`, party);
} 
deletePartyById(partyId:any):Observable<any>{
  return this.httpClient.delete(`${this.loginUrl}/party/deleteparty/${partyId}`,{ responseType: 'text' });
}
getvotingEndDate(): void{
  this.httpClient.get(`${this.loginUrl}/user/electionenddate`,{ responseType: 'text' }).subscribe((res:any)=>{
   console.log("&&777&&&&",res);
   this.electionDate = new Date(res);
  })
}
addVote(partyId: any, userId: any): Observable<any>{
 return this.httpClient.post(`${this.loginUrl}/user/addvote/${partyId}/${userId}`, {});
}

getUserByEmail(email: string): Observable<any> {
  return this.httpClient.get(`${this.loginUrl}/user/findByUserEmail/${email}`);
}

changePassword(uid: any, password: string): Observable<any> {
  return this.httpClient.post(`${this.loginUrl}/user/changePassword/${uid}/${password}`, {});
  }
}
