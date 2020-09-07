import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidesComponent } from './guides.component';
import { GuidesListComponent } from './guides-list/guides-list.component';
import { GuidesRoutingModule } from './guides-routing.module';

@NgModule({
  declarations: [GuidesComponent, GuidesListComponent],
  imports: [CommonModule, GuidesRoutingModule],
})
export class GuidesModule {}
