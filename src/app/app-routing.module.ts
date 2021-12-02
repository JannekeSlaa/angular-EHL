import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleLoopComponent } from './simple-loop/simple-loop.component';
import { VrijdagComponent } from './vrijdag/vrijdag.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'simple-loop', component: SimpleLoopComponent },
  { path: 'vrijdag', component: VrijdagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
