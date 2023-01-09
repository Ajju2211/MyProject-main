import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSprintsComponent } from './all-sprints/all-sprints.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { WorkitembySprintComponent } from './workitemby-sprint/workitemby-sprint.component';
import { WorkitembydateComponent } from './workitembydate/workitembydate.component';
import { WorkitembyidComponent } from './workitembyid/workitembyid.component';
import { WorkitembytagsComponent } from './workitembytags/workitembytags.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch:'full'},
  { path: 'test', component: TestComponent },
  { path: 'workitembyid', component: WorkitembyidComponent },
  { path: 'workitembytags', component: WorkitembytagsComponent },
  { path: 'workitembydate', component: WorkitembydateComponent },
  { path: 'allsprints', component: AllSprintsComponent },
  { path: 'workitembysprint', component: WorkitembySprintComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
