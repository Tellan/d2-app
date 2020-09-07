import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidesListComponent } from './guides-list/guides-list.component';

const routes: Routes = [{ path: '', component: GuidesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidesRoutingModule {}
