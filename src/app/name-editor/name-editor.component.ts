import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  // name = new FormControl('');
  AAK = new FormGroup({
    name: new FormControl(''),
    class: new FormControl(''),
    id: new FormControl('')
  });
  constructor() { }
  ngOnInit() {
  }
  onClickM() {
    console.warn(this.AAK.value);
    // console.log(this.name.value, 'wow' );
  }
}
