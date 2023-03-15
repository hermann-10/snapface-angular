import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

  onViewFaceSnap(id: any) {
    this.router.navigateByUrl(`facesnaps/${id}`);
  }
}
