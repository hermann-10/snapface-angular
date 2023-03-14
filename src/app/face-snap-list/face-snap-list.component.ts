import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      //this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      //this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      //this.faceSnap.snaps--;
      //this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
