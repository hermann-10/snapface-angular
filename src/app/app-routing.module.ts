import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './core/components/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './core/components/face-snap/face-snap.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { NewFaceSnapComponent } from './core/components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './core/components/single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapComponent },
  { path: 'create', component: NewFaceSnapComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
