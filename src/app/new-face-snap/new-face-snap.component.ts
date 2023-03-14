import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss'],
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      location: [null],
    });

    //valueChanges is a observable. The ValueChanges is an event raised by the Angular forms whenever the value of the FormControl, FormGroup, or FormArray changes.
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map((formValue: any) => ({
        //using of "map" to modify the emission of the observable inside a pipe
        ...formValue, //...spreadoprator -> allows you to retrieve all the fields and values of the object you are retrieving
        createdDate: new Date(),
        snaps: 0,
        id: 0,
      }))
    );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
  }
}
