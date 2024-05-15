import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VoterheaderComponent } from './voter/voterheader/voterheader.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { VoterLoginGuardService } from './guard/voter-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { AddvoteComponent } from './voter/addvote/addvote.component';
import { ListvoterComponent } from './admin/listvoter/listvoter.component';
import { AddpartyComponent } from './admin/addparty/addparty.component';
import { ListpartyComponent } from './admin/listparty/listparty.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { VoterhomeComponent } from './voter/voterhome/voterhome.component';
import { EditvoterComponent } from './voter/editvoter/editvoter.component';
import { VoteresultComponent } from './admin/voteresult/voteresult.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'aboutus', component:AboutusComponent},
  {path:'', component:ApphomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'listvoter', component:ListvoterComponent, canActivate: [AdminLoginGuardService]},
  {path:'addparty', component:AddpartyComponent, canActivate: [AdminLoginGuardService]},
  {path:'listparty', component:ListpartyComponent, canActivate: [AdminLoginGuardService]},
  {path:'adminhome', component:AdminhomeComponent, canActivate: [AdminLoginGuardService]},
  {path:'addvote', component:AddvoteComponent, canActivate: [VoterLoginGuardService]},
  {path:'voterhome', component:VoterhomeComponent, canActivate: [VoterLoginGuardService]},
  {path:'editvoter', component:EditvoterComponent, canActivate: [AdminLoginGuardService]},
  {path:'result', component:VoteresultComponent, canActivate: [AdminLoginGuardService]},
  {path: 'forgotpassword', component: ForgotPasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
