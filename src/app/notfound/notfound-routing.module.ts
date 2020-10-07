import { NgModule } from '@angular/core';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundRoutingModule { }
