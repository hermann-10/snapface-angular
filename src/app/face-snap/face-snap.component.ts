import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
  }
}
