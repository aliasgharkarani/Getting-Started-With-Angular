import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  // AAK = new FormGroup({
  //   name: new FormControl(''),
  //   class: new FormControl(''),
  //   id: new FormControl('')
  // });
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });
  }
  onClickM() {
    console.warn(this.form.value.credentials, 'wow');
  }
  addCreds() {
    const creds = this.form.get('credentials') as FormArray;
    creds.push(this.fb.group({
      username: '',
      todo: '',
    }));
  }
}
