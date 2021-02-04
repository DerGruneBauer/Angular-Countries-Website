import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorderDetailsComponent } from './border-details/border-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [

  { path: 'details', component: DetailPageComponent },
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'borderDetails', component: BorderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
