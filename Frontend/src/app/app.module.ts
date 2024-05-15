import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddpartyComponent } from './admin/addparty/addparty.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ListpartyComponent } from './admin/listparty/listparty.component';
import { ListvoterComponent } from './admin/listvoter/listvoter.component';
import { VoteresultComponent } from './admin/voteresult/voteresult.component';
import { AddvoteComponent } from './voter/addvote/addvote.component';
import { VoterhomeComponent } from './voter/voterhome/voterhome.component';
import { VoterheaderComponent } from './voter/voterheader/voterheader.component';
import { EditvoterComponent } from './voter/editvoter/editvoter.component';
import { ContactusComponent } from './contactus/contactus.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { VoterLoginGuardService } from './guard/voter-login-guard.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AppheaderComponent,
    ApphomeComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    AddpartyComponent,
    AdminheaderComponent,
    AdminhomeComponent,
    ListpartyComponent,
    ListvoterComponent,
    VoteresultComponent,
    AddvoteComponent,
    VoterhomeComponent,
    VoterheaderComponent,
    EditvoterComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //provideClientHydration(),
    AdminLoginGuardService,
    VoterLoginGuardService,
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
