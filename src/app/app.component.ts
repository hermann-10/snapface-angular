import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  title = 'snapface-angular';

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Différentes matières',
      'Ok voici un nouvel élément !',
      'https://cdn.pixabay.com/photo/2014/06/28/22/14/five-elements-379106__480.jpg',
      new Date(),
      0,
      'Genève'
    );

    this.myLastSnap = new FaceSnap(
      'Moto',
      'Une course en moto!',
      'https://cdn.pixabay.com/photo/2018/04/30/23/27/motorcycle-3364376_960_720.png',
      new Date(),
      0
    );
  }
}
