import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from '../core/components/face-snap/face-snap.component';
import { FaceSnapListComponent } from '../core/components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from '../core/components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from '../core/components/single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
  ],
})
export class FaceSnapsModule {}
