import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit, OnChanges {
  @Input() parentEmail: string;
  prop !: number;
  mail: any = '';
  @Output() emailOutPut = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.warn(this.parentEmail);
    // this.emailOutPut.emit('alifrom child');
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // this.emailOutPut.emit(this.mail);
    this.mail = this.parentEmail;
    // console.warn(this.parentEmail, 'wow');
  }
}
