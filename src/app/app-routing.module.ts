import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhoneListComponent} from './Components/phone-list.component' ;

import {PhoneDetailsComponent} from './Components/phone-details.component';

const routes: Routes = [
  {path: '', component: PhoneListComponent},
  {path: 'details/:phoneId', component: PhoneDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
