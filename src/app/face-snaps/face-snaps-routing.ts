import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { FaceSnapComponent } from "./components/face-snap/face-snap.component";
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
  { path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard] },
  { path: '', component: FaceSnapComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class FaceSnapsRoutingModule {}