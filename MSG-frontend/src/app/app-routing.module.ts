import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DatepickerComponent }      from './datepicker/datepicker.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { NewVisitComponent }      from './new-visit/new-visit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'datepicker', component: DatepickerComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'new-visit', component: NewVisitComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
