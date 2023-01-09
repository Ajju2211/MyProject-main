import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { SprintWorkitemComponent } from './sprint-workitem/sprint-workitem.component';
import { AzureService } from './services/azure.service';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkitembyidComponent } from './workitembyid/workitembyid.component';
import { WorkitembytagsComponent } from './workitembytags/workitembytags.component';
import { WorkitembydateComponent } from './workitembydate/workitembydate.component';
import { AllSprintsComponent } from './all-sprints/all-sprints.component';
import { WorkitembySprintComponent } from './workitemby-sprint/workitemby-sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestComponent,
    SprintWorkitemComponent,
    WorkitembyidComponent,
    WorkitembytagsComponent,
    WorkitembydateComponent,
    AllSprintsComponent,
    WorkitembySprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AzureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
