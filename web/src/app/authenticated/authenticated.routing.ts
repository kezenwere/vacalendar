import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedComponent} from './authenticated.component';


const authenticatedRoutes: Routes = [
  {
    path: '', component: AuthenticatedComponent, children: [
    {path: '', loadChildren: './content/content.module#ContentModule'},
  ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticatedRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthenticatedRoutingModule {
}
