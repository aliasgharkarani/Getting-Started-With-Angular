import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {
  @Input() parentEmail: string;
  prop !: number;

  constructor() { }

  ngOnInit() {
    console.warn(this.parentEmail);
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   // console.warn(this.parentEmail);
  // }
}
